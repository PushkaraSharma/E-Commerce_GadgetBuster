from django.urls import path
from . import views
from rest_framework_simplejwt.views import TokenObtainPairView  

urlpatterns = [
    path('users/login', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('', views.getRoutes, name="getRoutes"),
    path('users/profile', views.getUserProfile, name="getUserProfile"),
    path('users', views.getUsers, name="getUsers"),
    path('products/', views.getProducts, name="getProducts"),
    path('products/<str:pk>', views.getProduct, name="getProduct"),
]
