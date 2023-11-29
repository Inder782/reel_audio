from django.shortcuts import render
from rest_framework.decorators import api_view
from .models import Video
from rest_framework import status
from rest_framework.response import Response
# Create your views here.

@api_view(['POST'])
def Videohandle(request):
    if request.method=="POST":
        Video.save()
    return Response(status.is_success)