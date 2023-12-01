from rest_framework import serializers
from .models import Blog
from django.contrib.auth.models import User

class CreateUser(serializers.ModelSerializer):
    class Meta:
        model=User
        fields=[
            "username","password"]
        
class Blogserializer(serializers.ModelSerializer):
    class Meta:
        model=Blog
        fields=[
            'title','content','date','pk'
        ]
