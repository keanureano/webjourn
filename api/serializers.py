from rest_framework import serializers
from django.contrib.auth.models import User


class UserSerializer(serializers.ModelSerializer):
    # Include only the id and username fields of the User model
    class Meta:
        model = User
        fields = ['id', 'username']
