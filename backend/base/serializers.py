from django.db import models
from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Product
from rest_framework_simplejwt.tokens import RefreshToken

class UserSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField(read_only=True)
    _id = serializers.SerializerMethodField(read_only=True)
    isAdmin = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = User
        fields = ['_id','name','email','isAdmin']

    def get__id(self,object):
        return object.id    

    def get_isAdmin(self, object):
        return object.is_staff    
    
    def get_name(self,object):
        name = object.first_name
        if name=='':
            name = object.email

        return name


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'


class UserSerializerWithToken(UserSerializer):
    class Meta:
        model = User
        fields = ['_id','name','email','isAdmin','token'] 

    def get_token(self, object):
        token = RefreshToken.for_user(object)
        return str(token)      
