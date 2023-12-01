from django.urls import path
from .views import TestView,Bloger,CreateUs,Bloging,Search
from rest_framework.authtoken.views import obtain_auth_token

urlpatterns = [
    path('',TestView.as_view(),name="index"),
    path('api/token/',obtain_auth_token,name='obtain'),
    path('blog',Bloger.as_view(),name='blog'),
    path('blog/<str:id>',Bloging.as_view(),name='blog'),
    path('user',CreateUs.as_view(),name='user'),
    path('search',Search.as_view(),name='search')
    
]
