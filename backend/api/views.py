from django.shortcuts import render
from rest_framework import generics
from api import serializers
from django.contrib.auth.models import User
from api.models import Post
from rest_framework import permissions
from api.permissions import IsOwnerOrReadOnly

'''
API views that handle HTTP requests for retrieving and creating blog posts and users
Each view uses serializer to convert database queryset into JSON format
'''


class PostList(generics.ListCreateAPIView):
    # API view to get all posts or create a new post
    queryset = Post.objects.all()
    serializer_class = serializers.PostSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

    # Method called when a new post is created
    # Sets the post's owner to the current user
    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


class PostDetail(generics.RetrieveUpdateDestroyAPIView):
    # API view to get, update, or delete a single post.
    queryset = Post.objects.all()
    serializer_class = serializers.PostSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly, IsOwnerOrReadOnly]


class UserList(generics.ListAPIView):
    # API view to get all users.
    queryset = User.objects.all()
    serializer_class = serializers.UserSerializer


class UserDetail(generics.RetrieveAPIView):
    # API view to get a single user
    queryset = User.objects.all()
    serializer_class = serializers.UserSerializer
