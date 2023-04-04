from rest_framework import serializers
from django.contrib.auth.models import User
from api.serializers.post import PostSerializer

'''
API Serializers for converting Post model instances to JSON format
'''


class UserSerializer(serializers.ModelSerializer):
    # Gets all user's posts
    posts = PostSerializer(many=True, read_only=True)

    # Fields to include in serialized data
    class Meta:
        model = User
        fields = ['id', 'username', 'posts']
