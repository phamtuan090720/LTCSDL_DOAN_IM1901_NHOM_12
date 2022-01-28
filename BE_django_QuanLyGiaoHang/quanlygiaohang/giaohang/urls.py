from django.urls import path,include
from . import views
from django.conf.urls import url
from rest_framework.routers import DefaultRouter
router = DefaultRouter()
router.register('category',views.CategoryView)
router.register('user',views.UserViewSet)
router.register('posts',views.BaiDangViewSet)
router.register('shipper',views.ShippeeViewSet)
router.register('order',views.DonHangViewSet)
router.register('receipt',views.HoaDonViewSet)
router.register('discount',views.KhuyenMaiViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('oauth2-info/', views.AuthInfo.as_view()),
    path('api-auth/', include('rest_framework.urls')),
]