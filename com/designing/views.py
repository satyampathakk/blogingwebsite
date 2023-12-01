from rest_framework.views import APIView
from django.db import connection
from rest_framework.response import Response
from .models import Blog
from .serializers import CreateUser,Blogserializer
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth.models import User
from django.db.models import Q
# Create your views here.
class TestView(APIView):
    def get(self,request,*args, **kwargs):
        return Response({'message': 'Hello!'})
        
class CreateUs(APIView):
    def post(request,self,*args,**kwargs):
        serializer=CreateUser(data=request.data)
        if serializer.is_valid():
            serializer.save()
    def get(self,request,*args,**kwargs):
        user=request.user
        data=User.objects.filter(username=user)
        serial=CreateUser(data,many=True)
        return Response(serial.data)

class Bloger(APIView):
    def get(self ,request,*args, **kwargs):
        data=Blog.objects.all()
        serializer=Blogserializer(data,many=True)
        return Response(serializer.data)
    def post(self,request,*args,**kwargs):
        serializer=Blogserializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=201)
        else:
            return Response(serializer.errors)
class Bloging(APIView):
    def delete(self,request,*args, **kwargs):
        id = kwargs['id']
        blogs = Blog.objects.get(pk=id)
        blogs.delete()
        return Response("Deleted")
    def post(self,request,*args, **kwargs):
        id= kwargs['id']
        blogs=Blog.objects.get(pk=id)
        serializer=Blogserializer(blogs,data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=204)
        else:
            return Response(serializer.errors)
    def get(self, request, *args, **kwargs):
        try:
            blog_id = kwargs['id']
            blog = Blog.objects.get(pk=blog_id)
            serializer = Blogserializer(blog)  
            return Response(serializer.data, status=200)
        except Blog.DoesNotExist:
            return Response({"error": "Blog not found"}, status=404)
class Search(APIView):
    def post(self,request,*args, **kwargs):
        data=request.data.get('query','')
        results = Blog.objects.filter(Q(content__icontains=data))
        if not results:
            return Response([])
        serialized=Blogserializer(results,many=True)
        return Response(serialized.data)
    