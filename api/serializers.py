from rest_framework import serializers
from django.contrib.auth.models import User
from api.models import Post


'''
API Serializers for converting Post and User model instances to JSON format
'''


class OwnerSerializer(serializers.ModelSerializer):
    # Gets owner, this is used in PostSerializer
    class Meta:
        model = User
        fields = ['id', 'username']


class PostSerializer(serializers.ModelSerializer):
    # Gets owner for each post
    owner = OwnerSerializer(read_only=True)

    # Fields to include in serialized data
    class Meta:
        model = Post
        fields = ['id', 'title', 'content', 'owner']


class UserSerializer(serializers.ModelSerializer):
    # Gets all user's posts
    posts = PostSerializer(many=True, read_only=True)

    # Fields to include in serialized data
    class Meta:
        model = User
        fields = ['id', 'username', 'posts']
