from django.shortcuts import render
from django.contrib import admin
from django.http import HttpResponse
from django.urls import path,include
from django.http import JsonResponse
# Create your views here.

def hello(request):
    return HttpResponse("HI THERE")