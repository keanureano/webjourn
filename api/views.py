from django.shortcuts import render
from rest_framework import generics
from api import serializers
from django.contrib.auth.models import User
from api.models import Post


'''
API views that handle HTTP requests for retrieving and creating blog posts and users
Each view serializes the data returned from the database queryset into JSON format
'''


class PostList(generics.ListCreateAPIView):
    # API view to get all posts or create a new post
    queryset = Post.objects.all()
    serializer_class = serializers.PostSerializer

    # Method called when a new post is created
    # Sets the post's owner to the current user
    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


class PostDetail(generics.RetrieveUpdateDestroyAPIView):
    # API view to get, update, or delete a single post.
    queryset = Post.objects.all()
    serializer_class = serializers.PostSerializer


class UserList(generics.ListAPIView):
    # API view to get all users.
    queryset = User.objects.all()
    serializer_class = serializers.UserSerializer


class UserDetail(generics.RetrieveAPIView):
    # API view to get a single user
    queryset = User.objects.all()
    serializer_class = serializers.UserSerializer
