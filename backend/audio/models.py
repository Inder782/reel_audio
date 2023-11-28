from django.db import models

# Create your models here.

class Video(models.Model):
    video_file=models.FileField(upload_to="videos/")
    title= models.CharField(default=video_file,max_length=100)
  