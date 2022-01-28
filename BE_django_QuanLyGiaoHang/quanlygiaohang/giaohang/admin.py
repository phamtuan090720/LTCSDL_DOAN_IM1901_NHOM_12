from django.contrib import admin
from .models import *
from django.core.mail import send_mail
from django.conf.global_settings import EMAIL_HOST_USER

# Register your models here.

@admin.action(description='active shipper')
def active_shipper(modeladmin, request, queryset):
    subject = 'Accepting Instructor Deliverra'
    message = 'You have been approved to become a shipper of the system'
    for shipper in queryset:
        send_mail(subject, message, EMAIL_HOST_USER, [shipper.user.email], fail_silently=False)
    queryset.update(access=True)

@admin.action(description='unactive shipper')
def unactive_shipper(modeladmin, request, queryset):
    subject = 'Lock the shipper account'
    message = "You violate the system's rules, so your account will be locked. Any questions please reply to email"
    for shipper in queryset:
        send_mail(subject, message, EMAIL_HOST_USER, [shipper.user.email], fail_silently=False)
    queryset.update(access=False)

@admin.register(BaiDang)
class BaiDangAdminSite(admin.ModelAdmin):
    list_display = ['id', 'tac_gia', 'created_date', 'da_chon_shipper', 'so_km', "active", 'category']
    list_filter = ['created_date', 'category']


@admin.register(Shipper)
class ShipperAdminSite(admin.ModelAdmin):
    list_display = ['user', 'cmnd', 'access']
    actions = [active_shipper,unactive_shipper]
@admin.register(DauGia)
class DauGiaAdminSite(admin.ModelAdmin):
    list_display = ['id','bai_dang', 'shipper', 'gia_giao_hang_km']


@admin.register(User)
class UserAdminSite(admin.ModelAdmin):
    list_display = ['id', 'username']

@admin.register(KhuyenMai)
class KhuyenMaiAdminSite(admin.ModelAdmin):
    list_display = ['noi_dung', 'giam_gia','active']
@admin.register(DonHang)
class DonHangAdminSite(admin.ModelAdmin):
    list_display = ['id', 'bai_dang','dau_gia_duoc_chon', 'active','hoan_thanh','giam_gia','shipper']
@admin.register(HoaDon)
class HoaDonAdminSite(admin.ModelAdmin):
    list_display = ['id','don_hang']
@admin.register(DanhGiaShipper)
class DanhGiaShipper(admin.ModelAdmin):
    list_display = ['id','hoa_don']
admin.site.register(Category)
