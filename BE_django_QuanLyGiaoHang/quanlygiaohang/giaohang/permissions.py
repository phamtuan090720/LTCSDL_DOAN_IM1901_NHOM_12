from rest_framework.permissions import BasePermission, SAFE_METHODS, IsAuthenticated
from .models import *

class UserPermission(BasePermission):
    def has_permission(self, request, view):
        if view.action in ["update_shipper"]:
            return request.user.is_authenticated
        else:
            return True

    def has_object_permission(self, request, view, obj):
        if request.user.is_superuser:
            return True
        elif request.method in ['PUT', 'PATCH']:
            return obj == request.user


class BaiDangPermission(BasePermission):
    def has_permission(self, request, view):
        if view.action in ["get_my_post", "add_post"]:
            return request.user.is_authenticated
        else:
            return True

    def has_object_permission(self, request, view, obj):
        if request.method in ['PUT', 'PATCH'] or view.action in ['delete_post']:
            return request.user.is_authenticated and obj.tac_gia == request.user
        elif view.action in ['add_auction']:
            return request.user.is_authenticated and Shipper.objects.filter(pk=request.user,access=True).exists()
        elif view.action in ['add_order']:
            return request.user.is_authenticated and obj.tac_gia == request.user
        elif view.action in ['retrieve']:
            return request.user.is_authenticated and obj.tac_gia == request.user or request.user.is_authenticated \
                   and Shipper.objects.filter(pk=request.user,access=True).exists()
        else:
            return request.user.is_authenticated

class DonHangPermission(BasePermission):
    def has_permission(self, request, view):
        if view.action in ['list']:
            return request.user.is_authenticated
        else:
            return True
    def has_object_permission(self, request, view, obj):
        if view.action in ['done_order']:
            return request.user.is_authenticated and Shipper.objects.filter(pk=request.user,access=True).exists()
        else:
            return True
class HoaDonPermission(BasePermission):
    def has_permission(self, request, view):
        return request.user.is_authenticated

    def has_object_permission(self, request, view, obj):
        if view.action in ['add_review']:
            return request.user.is_authenticated

