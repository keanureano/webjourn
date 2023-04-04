from rest_framework import serializers
from api.models import Post
from api.serializers.user import UserSerializer

'''
API Serializers for converting Post model instances to JSON format
'''


class PostSerializer(serializers.ModelSerializer):
    # Gets owner for each post
    owner = UserSerializer(read_only=True)

    # Fields to include in serialized data
    class Meta:
        model = Post
        fields = ['id', 'title', 'content', 'owner']
