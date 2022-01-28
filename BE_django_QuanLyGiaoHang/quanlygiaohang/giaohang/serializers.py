from .models import *
from rest_framework.serializers import ModelSerializer
import django.contrib.auth.password_validation as validators
from django.core.exceptions import ValidationError
from rest_framework import serializers
from django.contrib.auth.models import Group
import re
from django.db.models import Avg


class CategorySerializer(ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'


class GroupSerializer(ModelSerializer):
    class Meta:
        model = Group
        fields = ['name']


class UserSerializer(ModelSerializer):
    user_role = serializers.SerializerMethodField(read_only=True, method_name='get_user_role')

    def get_user_role(self, user):
        try:
            return str(user.groups.all()[0])
        except:
            return None

    class Meta:
        model = User
        fields = ['id', 'username', 'first_name', 'last_name', 'email', 'user_role', 'so_dien_thoai', 'password']
        extra_kwargs = {
            'password': {'write_only': 'true'},
        }

    def validate_phone_number(self, data):
        errors = dict()
        regex = re.compile(r'(84|0[3|5|7|8|9])+([0-9]{8})\b')
        if regex.match(data) is None:
            errors['*phone_number'] = "phone number is not in the correct format"
        print(errors)
        if errors:
            raise serializers.ValidationError(errors)
        return super(UserSerializer, self).validate(data)

    def validate_password(self, data):
        errors = dict()
        try:
            validators.validate_password(password=data)
        except ValidationError as e:
            errors = list(e.messages)
        if errors:
            raise serializers.ValidationError(errors)
        return super(UserSerializer, self).validate(data)

    def create(self, validated_data):
        self.validate_phone_number(validated_data['so_dien_thoai'])
        user = User.objects.create_user(**validated_data)
        user.set_password(validated_data['password'])
        group = Group.objects.get(name="KhachHang")
        user.groups.set([group.id])
        user.save()
        return user

    def update(self, instance, validated_data):
        # self.validate_phone_number(validated_data['so_dien_thoai'])
        user = super().update(instance, validated_data)
        if 'password' in validated_data:
            user.set_password(validated_data['password'])
            user.save()
        return user


class TacGiaField(ModelSerializer):
    class Meta:
        model = User
        fields = ['so_dien_thoai', 'email', 'username']


class BaiDangSerializer(ModelSerializer):
    tac_gia = TacGiaField()
    category = CategorySerializer()

    def create(self, validated_data):
        print(validated_data)
        return

    class Meta:
        model = BaiDang
        fields = ['tac_gia', 'category',
                  'created_date', 'active',
                  'so_km', 'dia_chi_giao',
                  'dia_chi_nhan', 'mo_ta', 'id']


class ChiTietBaiDangSerializer(BaiDangSerializer):
    class Meta:
        model = BaiDangSerializer.Meta.model
        fields = BaiDangSerializer.Meta.fields


class InfoShipper(ModelSerializer):
    class Meta:
        model = User
        fields = ['username', 'first_name', 'so_dien_thoai', 'id', 'last_name','email']


class ShipperSerializer(ModelSerializer):
    user = InfoShipper()

    class Meta:
        model = Shipper
        fields = '__all__'

class InfoAuthor(ModelSerializer):
    class Meta:
        model = User
        fields = ['email', 'so_dien_thoai','username']

class DanhGiaShipperSerializer(ModelSerializer):
    tac_gia = serializers.SerializerMethodField(read_only=True,method_name='get_author')
    def get_author(self,dg):
        return InfoAuthor(dg.hoa_don.don_hang.user).data
    class Meta:
        model = DanhGiaShipper
        fields = ['id', 'created_date', 'diem_danh_gia', 'binh_luan','tac_gia']


class DetailShipperSerializer(ModelSerializer):
    user = InfoShipper()
    avg_rate = serializers.SerializerMethodField(read_only=True, method_name='get_avg_rate')
    list_danh_gia = serializers.SerializerMethodField(read_only=True, method_name='get_danh_gia')

    def get_danh_gia(self, s):

        hd = HoaDon.objects.filter(active=True,don_hang__shipper=s)
        print(hd)
        dg = DanhGiaShipper.objects.filter(hoa_don__in=hd)
        serializer = DanhGiaShipperSerializer(dg, many=True)
        return serializer.data

    def get_avg_rate(self, s):
        try:
            hd = HoaDon.objects.filter(active=True,don_hang__shipper=s)
            point = DanhGiaShipper.objects.filter(hoa_don__in=hd).aggregate(Avg('diem_danh_gia'))
            return point['diem_danh_gia__avg']
        except:
            return None

    class Meta:
        model = Shipper
        fields = ['user', 'cmnd', 'avatar', 'avg_rate', 'list_danh_gia',"access"]


class DauGiaSerializer(ModelSerializer):
    shipper = ShipperSerializer()

    class Meta:
        model = DauGia
        fields = ['shipper', 'bai_dang', 'gia_giao_hang_km', 'binh_luan', 'created_date', 'id']


class InfoUser(ModelSerializer):
    class Meta:
        model = User
        fields = ['email', 'so_dien_thoai']


class InfoKhuyenMai(ModelSerializer):
    class Meta:
        model = KhuyenMai
        fields = ['noi_dung', 'giam_gia', 'active', 'id']


class DonHangSerializer(ModelSerializer):
    dau_gia_duoc_chon = DauGiaSerializer()
    bai_dang = BaiDangSerializer()
    giam_gia = InfoKhuyenMai()

    class Meta:
        model = DonHang
        fields = '__all__'


class DanhGiaSerializer(ModelSerializer):
    class Meta:
        model = DanhGiaShipper
        fields = '__all__'


class HoaDonSerializer(ModelSerializer):
    danh_gia_shipper = serializers.SerializerMethodField(read_only=True, method_name='get_danh_gia')
    don_hang = DonHangSerializer()

    def get_danh_gia(self, hd):
        try:
            return DanhGiaSerializer(hd.danh_gia).data
        except:
            return None

    class Meta:
        model = HoaDon
        fields = ['don_hang', 'tong_gia', 'created_date', 'danh_gia_shipper', 'id']
