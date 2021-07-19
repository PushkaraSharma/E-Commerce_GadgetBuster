from django.urls import path
from base.views import user_view
from rest_framework_simplejwt.views import TokenObtainPairView  

urlpatterns = [
    path('login/', user_view.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('register/', user_view.registerUser, name='register'),
    path('profile/', user_view.getUserProfile, name="getUserProfile"),
    path('', user_view.getUsers, name="getUsers"),
]
