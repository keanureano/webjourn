from django.shortcuts import render
from rest_framework import generics
from api import serializers
from django.contrib.auth.models import User

# Create your views here.


class UserList(generics.ListAPIView):
    # get all users in a list
    queryset = User.objects.all()
    serializer_class = serializers.UserSerializer


class UserDetail(generics.RetrieveAPIView):
    # get single user detail
    queryset = User.objects.all()
    serializer_class = serializers.UserSerializer
