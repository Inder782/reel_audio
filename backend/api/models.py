from django.db import models

# Create your models here.
class Video(models.Model):
    name=models.CharField(max_length=50,default=1)
    video_file=models.FileField(upload_to="vid/")
    


