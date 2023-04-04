from rest_framework import serializers
from django.contrib.auth.models import User
from api.models import Post


'''Serializers are used to convert User/Post model instances to JSON format for API responses.'''


class PostSerializer(serializers.ModelSerializer):
    # Gets owner for each post
    owner = serializers.ReadOnlyField(source='owner.username')

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
