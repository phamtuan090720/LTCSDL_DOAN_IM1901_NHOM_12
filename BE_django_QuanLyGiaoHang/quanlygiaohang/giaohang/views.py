import decimal

from django.shortcuts import render
from rest_framework import viewsets, generics, status, permissions
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework.parsers import MultiPartParser, JSONParser
from django.core.exceptions import ObjectDoesNotExist
from django.contrib.auth.models import Group
from django.db.utils import IntegrityError
# Create your views here.
from .models import *
import datetime
from .serializers import *
from .permissions import *
from django.conf import settings
from .validation import *
from .paginator import *
from django.core.mail import send_mail
from django.conf.global_settings import EMAIL_HOST_USER

class CategoryView(viewsets.ViewSet, generics.ListAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


class UserViewSet(viewsets.ViewSet, generics.CreateAPIView, generics.UpdateAPIView):
    queryset = User.objects.filter(is_active=True)
    serializer_class = UserSerializer
    parser_classes = [MultiPartParser, JSONParser]
    permission_classes = [UserPermission]

    def get_permissions(self):
        if self.action in ['get_current_user','update_shipper']:
            return [permissions.IsAuthenticated()]
        return [permissions.AllowAny()]

    @action(methods=['post'], detail=False, url_path="register-shipper")
    def register_shipper(self, request, *args, **kwargs):
        errors = dict()
        if request.FILES.get("avatar") is None:
            errors['avatar'] = ["Can't be empty"]
        if validation_username(request.data.get('username')):
            errors['username'] = validation_username(request.data.get('username'))
        if validate_phone_number(request.data.get('so_dien_thoai')):
            errors['so_dien_thoai'] = validate_phone_number(request.data.get('so_dien_thoai'))
        if validation_cmnd(request.data.get('cmnd')):
            errors['cmnd'] = validation_cmnd(request.data.get('cmnd'))
        if validate_password(request.data.get('password')):
            errors['password'] = validate_password(request.data.get('password'))
        if validation_email(request.data.get('email')):
            errors['email'] = validation_email(request.data.get('email'))
        if errors:
            return Response(status=status.HTTP_400_BAD_REQUEST, data=errors)
        else:
            u = User.objects.create_user(username=request.data.get('username'),
                                         password=request.data.get('password'),
                                         email=request.data.get('email'),
                                         so_dien_thoai=request.data.get('so_dien_thoai'))
            group = Group.objects.get(name="Shipper")
            u.groups.set([group.id])
            s = Shipper.objects.create(cmnd=request.data.get('cmnd'), user=u, avatar=request.FILES.get("avatar"))
            s.save()
        return Response(status=status.HTTP_201_CREATED, data={"mess": "Register Success"})

    @action(methods=['post'], detail=False, url_path="update-shipper")
    def update_shipper(self,request):
        if Shipper.objects.filter(user=request.user).exists():
            errors = dict()
            if validate_phone_number(request.data.get('so_dien_thoai')):
                errors['so_dien_thoai'] = validate_phone_number(request.data.get('so_dien_thoai'))
            if request.data.get("cmnd") is not None:
                if validation_cmnd(request.data.get('cmnd')):
                    errors['cmnd'] = validation_cmnd(request.data.get('cmnd'))
            if validation_email(request.data.get('email')):
                errors['email'] = validation_email(request.data.get('email'))
            if errors:
                return Response(status=status.HTTP_400_BAD_REQUEST, data=errors)
            sp = Shipper.objects.get(user=request.user)
            user = request.user
            user.so_dien_thoai = request.data.get('so_dien_thoai')
            user.email = request.data.get('email')
            if request.data.get("first_name") is not None:
                print(request.data.get("first_name"))
                user.first_name = request.data.get("first_name")
            if request.data.get("last_name") is not None:
                print(request.data.get("last_name"))
                user.last_name = request.data.get("last_name")
            if request.data.get("avatar") is not None:
                sp.avatar = request.FILES.get("avatar")
            if request.data.get("cmnd") is not None:
                sp.cmnd = request.data.get("cmnd")
            user.save()
            sp.save()
            return Response(status=status.HTTP_200_OK,data="successfully")
        return Response(status=status.HTTP_403_FORBIDDEN,data="you do not have access to this action")


    @action(methods=['get'], detail=False, url_path="current-user")
    def get_current_user(self, request):
        return Response(self.serializer_class(request.user).data,
                        status=status.HTTP_200_OK)


class BaiDangViewSet(viewsets.ViewSet, generics.ListAPIView, generics.RetrieveAPIView):
    queryset = BaiDang.objects.filter(da_chon_shipper=False, active=True)
    serializer_class = BaiDangSerializer
    pagination_class = BasePaginator
    permission_classes = [BaiDangPermission]

    def retrieve(self, request, *args, **kwargs):
        instance = self.get_object()
        info = self.get_serializer(instance)
        if self.get_object().tac_gia == request.user:
            dau_gia = DauGia.objects.filter(bai_dang=self.get_object())
            page = self.paginate_queryset(dau_gia)
            if page is not None:
                serializer = DauGiaSerializer(page, many=True, context={"request": request})
                return self.get_paginated_response(data={"info": info.data, "dau_gia": serializer.data})
        else:
            sp = Shipper.objects.get(pk=request.user)
            print(sp)
            dau_gia = DauGia.objects.filter(bai_dang=self.get_object(), shipper=sp)
            print(dau_gia)
            page = self.paginate_queryset(dau_gia)
            if page is not None:
                serializer = DauGiaSerializer(page, many=True, context={"request": request})
                return self.get_paginated_response(data={"info": info.data, "dau_gia": serializer.data})
        return Response(status=status.HTTP_200_OK)

    @action(methods=['post'], detail=False, url_path="add-post")
    def add_post(self, request):
        data = request.data
        category = data.get("category")
        dia_chi_giao = data.get("dia_chi_giao")
        dia_chi_nhan = data.get("dia_chi_nhan")
        so_km = data.get("so_km")
        mo_ta = data.get("mo_ta")
        if category is not None and dia_chi_giao is not None and dia_chi_nhan is not None and so_km is not None and \
                mo_ta is not None:
            try:
                category = Category.objects.get(pk=int(category))
            except ObjectDoesNotExist:
                return Response(status=status.HTTP_400_BAD_REQUEST, data={"mess": "Not Found Category"})
            print(category)
            try:
                post = BaiDang.objects.create(
                    category=category,
                    so_km=float(so_km),
                    dia_chi_giao=dia_chi_giao,
                    dia_chi_nhan=dia_chi_nhan,
                    tac_gia=request.user,
                    da_chon_shipper=False,
                    mo_ta=mo_ta
                )
                post.save()
            except:
                return Response(status=status.HTTP_500_INTERNAL_SERVER_ERROR, data={"mess": "Falied"})
            return Response(status=status.HTTP_201_CREATED, data={"mess": "Create Success"})
        else:
            return Response(status=status.HTTP_400_BAD_REQUEST)

    @action(methods=['get'], detail=False, url_path="my-post")
    def get_my_post(self, request):
        query = BaiDang.objects.filter(tac_gia=request.user, da_chon_shipper=False, active=True)
        category = request.query_params.get('category')
        if category is not None and str(category).isnumeric():
            query = query.filter(category=category)
        page = self.paginate_queryset(query)
        if page is not None:
            serializer = BaiDangSerializer(page, many=True, context={"request": request})
            return self.get_paginated_response(data=serializer.data)

    @action(methods=['get'], detail=True, url_name='delete-post')
    def delete_post(self, request, pk=None):
        self.check_object_permissions(request, self.get_object())
        post = self.get_object()
        post.active = False
        post.save()
        return Response(status=status.HTTP_200_OK, data={"mess": "Delete Success"})

    @action(methods=['post'],detail=True,url_name='add-auction')
    def add_auction(self,request, pk=None):
        data = request.data
        post = self.get_object()

        if data.get('gia_giao_hang_km') is None or data.get('binh_luan') is None:
            return Response(status=status.HTTP_400_BAD_REQUEST,data="price and comment is not null")

        try:
            dau_gia = DauGia.objects.create(gia_giao_hang_km=data.get('gia_giao_hang_km'),
                                            binh_luan=data.get('binh_luan'),
                                            bai_dang=post,
                                            shipper=Shipper.objects.get(user=request.user)
                                            )
            dau_gia.save()
        except:
            return Response(status=status.HTTP_500_INTERNAL_SERVER_ERROR,data="Failed")
        return Response(status=status.HTTP_201_CREATED,data="Successfully")

    @action(methods=['post'], detail=True, url_name='add-order')
    def add_order(self, request, pk=None):
        post = self.get_object()
        data = request.data
        list_user_lose = []
        all_dg = self.get_object().bai_dang.all()
        try:
            dg = DauGia.objects.get(pk=data.get('id_dau_gia'))
            for i in all_dg:
                if dg != i:
                    list_user_lose.append(i.shipper.user.email)
        except:
            return Response(status=status.HTTP_404_NOT_FOUND, data={"detail": "Dau Gia Not Found"})
        if dg.bai_dang == post:
            order = DonHang.objects.create(shipper=dg.shipper,
                                           bai_dang=post,
                                           user=request.user,
                                           dau_gia_duoc_chon=dg
                                           )
            if data.get("ma_giam_gia") is not None:
                discount = KhuyenMai.objects.get(pk=int(data.get("ma_giam_gia")))
                order.giam_gia = discount
            post.da_chon_shipper = True
            ## send tin nhắn cho shipper được chọn
            subject = 'Notifications from the system'
            message = 'Posts with ID ' + str(self.get_object().id) + ' have chosen you as a shipper'
            send_mail(subject, message, EMAIL_HOST_USER, [dg.shipper.user.email], fail_silently=False)
            ## thông báo đấu giá thất bại
            if len(list_user_lose) > 0 :
                subject_user_lose = 'Notifications from the system'
                message_user_lose = 'Posts with ID ' + str(self.get_object().id)+ ' has found a suitable shipper, your bid was unsuccessful'
                send_mail(subject_user_lose, message_user_lose, EMAIL_HOST_USER, list_user_lose, fail_silently=False)
            post.save()
            order.save()
            return Response(status=status.HTTP_201_CREATED, data={"Successfully"})
        else:
            return Response(status=status.  HTTP_400_BAD_REQUEST, data={"detail": "Auction is not part of the post"})

class ShippeeViewSet(viewsets.ViewSet, generics.RetrieveAPIView):
    queryset = Shipper.objects.filter(access=True)
    serializer_class = DetailShipperSerializer
    def get_permissions(self):
        if self.action == 'get_current_user':
            return [permissions.IsAuthenticated()]
        return [permissions.AllowAny()]

    @action(methods=['get'], detail=False, url_path="current-user")
    def get_current_user(self, request):
        try:
            sp = Shipper.objects.get(user=request.user,access=True)
        except:
            return Response(status=status.HTTP_403_FORBIDDEN,data={"You are not Shipper"})
        return Response(self.serializer_class(sp,context={"request":request}).data,
                        status=status.HTTP_200_OK)

class DonHangViewSet(viewsets.ViewSet, generics.ListAPIView):
    queryset = DonHang.objects.filter(active=True, hoan_thanh=False)
    serializer_class = DonHangSerializer
    pagination_class = BasePaginator
    permission_classes = [DonHangPermission]

    def list(self, request, *args, **kwargs):
        queryset = DonHang.objects.filter(active=True, hoan_thanh=False)
        if Shipper.objects.filter(user=request.user, access=True).exists():
            sp = Shipper.objects.get(user=request.user)
            queryset = queryset.filter(shipper=sp)
            page = self.paginate_queryset(queryset)
            if page is not None:
                serializers = DonHangSerializer(queryset, many=True, context={'request': request})
                return self.get_paginated_response(serializers.data)
        else:
            queryset = queryset.filter(user=request.user)
            page = self.paginate_queryset(queryset)
            if page is not None:
                serializers = DonHangSerializer(queryset, many=True, context={'request': request})
                return self.get_paginated_response(serializers.data)

    @action(methods=['get'], detail=True, url_path="done-order")
    def done_order(self, request, pk=None):
        order = self.get_object()
        shipper = Shipper.objects.get(user=request.user)
        if shipper == order.shipper:
            gia_tren_km = self.get_object().dau_gia_duoc_chon.gia_giao_hang_km
            so_km = self.get_object().bai_dang.so_km
            giam_gia = self.get_object().giam_gia
            tong_gia = so_km*gia_tren_km
            if giam_gia is not None:
                giam_gia = self.get_object().giam_gia.giam_gia
                tong_gia = round(tong_gia - tong_gia*(decimal.Decimal(giam_gia/float(100))),2)
            hd = HoaDon.objects.create(don_hang=self.get_object(),tong_gia=tong_gia)
            order.hoan_thanh = True
            subject = 'Notifications from the system'
            message = 'Order with ID '+ str(self.get_object().id) + ' has been completed'
            send_mail(subject, message, EMAIL_HOST_USER, [order.user.email], fail_silently=False)
            hd.save()
            order.save()
            return Response(status=status.HTTP_200_OK, data={"Successfully"})
        else:
            return Response(status=status.HTTP_403_FORBIDDEN, data={"mess": "You are not the shipper of this order"})

class KhuyenMaiViewSet(viewsets.ViewSet,generics.ListAPIView):
    queryset = KhuyenMai.objects.filter(active=True)
    serializer_class = InfoKhuyenMai

class HoaDonViewSet(viewsets.ViewSet, generics.ListAPIView):
    queryset = HoaDon.objects.filter(active=True)
    serializer_class = HoaDonSerializer
    pagination_class = BasePaginator
    permission_classes = [IsAuthenticated]

    def list(self, request, *args, **kwargs):
        queryset = self.filter_queryset(self.get_queryset())
        print(queryset.filter(don_hang__user=request.user))
        # Kiểm tra xem là shipper hay Khách hàng
        if Shipper.objects.filter(user=request.user).exists():
            shipper = Shipper.objects.get(user=request.user)
            queryset = queryset.filter(don_hang__shipper=shipper)
        else:
            queryset = queryset.filter(don_hang__user=request.user)
        page = self.paginate_queryset(queryset)
        if page is not None:
            serializer = self.get_serializer(page, many=True)
            return self.get_paginated_response(serializer.data)

        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)

    @action(methods=['post'], detail=True, url_path="add-review")
    def add_review(self,request,pk=None):
        data = request.data
        if request.data.get('diem_danh_gia') is None or request.data.get('binh_luan') is None:
            return Response(status=status.HTTP_400_BAD_REQUEST,data="comment and rate cannot Null")
        if self.get_object().don_hang.user == request.user:
            if type(data.get('diem_danh_gia')) == int and data.get('diem_danh_gia') >= 0 and data.get(
                    'diem_danh_gia') <= 5:
                if DanhGiaShipper.objects.filter(hoa_don=self.get_object()).exists():
                    danh_gia = DanhGiaShipper.objects.get(pk=self.get_object().id)
                    danh_gia.diem_danh_gia = data.get('diem_danh_gia')
                    danh_gia.binh_luan = data.get('binh_luan')
                    danh_gia.save()
                    return Response(status=status.HTTP_200_OK,data="Add Reviews Successfully")
                else:
                    danh_gia = DanhGiaShipper.objects.create(hoa_don=self.get_object(),
                                                             diem_danh_gia=data.get('diem_danh_gia'),
                                                             binh_luan=data.get('binh_luan'))
                    danh_gia.save()
                    return Response(status=status.HTTP_201_CREATED,data="Add Reviews Successfully")
            else:
                return Response(status=status.HTTP_400_BAD_REQUEST,data="Rate must be numerical and range from 0-5")
        else:
            return Response(status=status.HTTP_403_FORBIDDEN,data={"detail":"You do not have permission to take action"})
    @action(methods=['get'],detail=False,url_name='statistic')
    def statistic(self,request):
        print(request.user)
        print("Check quyền admin",Group.objects.get(name="Admin") in request.user.groups.all())
        if Group.objects.get(name="Admin") in request.user.groups.all():
            now = datetime.datetime.now()
            current_year = now.year
            query = HoaDon.objects.filter(created_date__year = current_year)
            query2 = DonHang.objects.filter(created_date__year=current_year,active=True)
            print(query2)
            doanh_thu = dict()
            don_hang_hoang_thanh = dict()
            don_hang_chua_hoan_thanh = dict()
            tong_don_hang_theo_thang = dict()
            switcher = {
                1: 'January',
                2: 'February',
                3: 'March',
                4: 'April',
                5: 'May',
                6: 'June',
                7: 'July',
                8: 'August',
                9: 'September',
                10: "October",
                11: 'November',
                12: 'December'
            }
            for m in range(1, 13):
                toal = 0
                for i in query.filter(created_date__month=m):
                    toal = toal + i.tong_gia
                doanh_thu[switcher.get(m)] = toal
                don_hang_hoang_thanh[switcher.get(m)] = query2.filter(created_date__month=m,hoan_thanh=True).count()
                don_hang_chua_hoan_thanh[switcher.get(m)] = query2.filter(created_date__month=m,hoan_thanh=False).count()
                tong_don_hang_theo_thang[switcher.get(m)] = query2.filter(created_date__month=m).count()
            return Response(status=status.HTTP_200_OK,data={"doanh_thu":doanh_thu,"don_hang_hoang_thanh":don_hang_hoang_thanh,
                                                            "don_hang_chua_hoan_thanh":don_hang_chua_hoan_thanh,
                                                            "tong_don_hang_theo_thang":tong_don_hang_theo_thang})
        else:
            return Response(status=status.HTTP_403_FORBIDDEN)



class AuthInfo(APIView):
    def get(self, request):
        return Response(settings.OAUTH2_INFO, status=status.HTTP_200_OK)
