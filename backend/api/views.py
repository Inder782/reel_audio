from django.views.decorators.csrf import csrf_exempt
from .models import Video
from rest_framework import status
from rest_framework.response import Response
from .serializer import VideoSerializer
from rest_framework.decorators import api_view
from moviepy.editor import VideoFileClip
# Create your views here.

@csrf_exempt
@api_view(["POST"])
def Videohandle(request):
    serializer=VideoSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        path="vid/How_Batman_even_manages_his_Sleep.mp4"
        video_clip=VideoFileClip(path)
        audio_clip=video_clip.audio
        output="vid/audio/output_video.mp3"
        audio_clip.write_audiofile(output)
        return Response(status=status.HTTP_200_OK)
    else:
        return Response(status=status.HTTP_500_INTERNAL_SERVER_ERROR)

