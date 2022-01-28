from django.db import models
from django.contrib.auth.models import AbstractUser
from django.core.validators import MaxValueValidator, MinValueValidator


# Create your models here.

class Category(models.Model):
    subject = models.CharField(max_length=100, null=False, unique=True)

    def __str__(self):
        return self.subject


class ModelBase(models.Model):
    created_date = models.DateTimeField(auto_now_add=True)
    updated_date = models.DateTimeField(auto_now=True)
    active = models.BooleanField(default=True)

    class Meta:
        abstract = True
        ordering = ['-id']  # sắp giảm theo id


class User(AbstractUser):
    so_dien_thoai = models.CharField(max_length=20, null=False)
    email = models.EmailField(unique=False, null=True)

    def __str__(self):
        return self.username


class Shipper(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, primary_key=True, related_name='shipper')
    cmnd = models.CharField(max_length=20, null=False, unique=True)
    avatar = models.ImageField(upload_to='static/uploads/%Y/%m', null=False, default=None)
    access = models.BooleanField(default=False, null=False)

    def __str__(self):
        return str(self.user)


class BaiDang(ModelBase):
    tac_gia = models.ForeignKey(User, on_delete=models.CASCADE, null=False, related_name='tac_gia')
    so_km = models.DecimalField(max_digits=5, decimal_places=2, null=False, validators=[
        MinValueValidator(0)
    ])
    dia_chi_giao = models.TextField(null=False)
    dia_chi_nhan = models.TextField(null=False)
    da_chon_shipper = models.BooleanField(default=False)
    mo_ta = models.TextField(null=False, default=None)
    category = models.ForeignKey(Category, on_delete=models.SET_NULL, null=True, default=None)


class DauGia(ModelBase):
    bai_dang = models.ForeignKey(BaiDang, on_delete=models.CASCADE, null=False, related_name='bai_dang')
    shipper = models.ForeignKey(Shipper, on_delete=models.CASCADE, null=False, related_name='shipper_dau_gia',
                                blank=True
                                , default=None)
    gia_giao_hang_km = models.DecimalField(max_digits=9, decimal_places=2, null=False, default=0,validators=[MinValueValidator(0)])
    binh_luan = models.TextField(null=True)


class KhuyenMai(ModelBase):
    noi_dung = models.TextField(null=False)
    giam_gia = models.IntegerField(null=False, validators=[
        MaxValueValidator(100),
        MinValueValidator(0)
    ])


class DonHang(ModelBase):
    shipper = models.ForeignKey(Shipper, on_delete=models.CASCADE, null=False, related_name='don_hang',
                                blank=True)
    user = models.ForeignKey(User, blank=True, on_delete=models.CASCADE, null=False, related_name='user')
    dau_gia_duoc_chon = models.ForeignKey(DauGia, on_delete=models.SET_NULL, null=True, related_name='don_hang')
    bai_dang = models.ForeignKey(BaiDang,on_delete=models.SET_NULL,null=True,related_name='don_hang')
    hoan_thanh = models.BooleanField(default=False)
    giam_gia = models.ForeignKey(KhuyenMai, on_delete=models.SET_NULL, null=True, blank=True, related_name='khuyen_mai')


class HoaDon(ModelBase):
    don_hang = models.ForeignKey(DonHang,on_delete=models.DO_NOTHING,null=True,related_name='hoa_don')
    tong_gia = models.DecimalField(max_digits=9, decimal_places=2, null=False, default=0,validators=[MinValueValidator(0)])


class DanhGiaShipper(ModelBase):
    hoa_don = models.OneToOneField(HoaDon, on_delete=models.CASCADE, null=False, related_name='danh_gia')
    diem_danh_gia = models.IntegerField(null=True, default=1, blank=True, validators=[
        MaxValueValidator(5),
        MinValueValidator(0)
    ])
    binh_luan = models.TextField(blank=True, null=True, default=None)
