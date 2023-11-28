from django.contrib import admin
from django.urls import path,include
from . import views
urlpatterns = [
    path ('get_audio/',views.upload,name="Video-list-create")
    
]
