from django.views.decorators.csrf import csrf_exempt
from .models import Video
from rest_framework import status
from rest_framework.response import Response
from .serializer import VideoSerializer
from rest_framework.decorators import api_view
from moviepy.editor import VideoFileClip
from django.http import FileResponse, HttpResponse
import os

@csrf_exempt
@api_view(["POST"])
def Videohandle(request):
    name_data = str(request.FILES.get("video_file"))
    serializer = VideoSerializer(data=request.data)

    ## define the paths and list them
    video_folder_path="output/audio"
    audio_folder_path="output/vid"
    video_files=os.listdir(video_folder_path)
    audio_files=os.listdir(audio_folder_path)

    #deleted the audio files
    for file_name in audio_files:
        file_path=os.path.join(audio_folder_path,file_name)
        if os.path.isfile(file_path):
            os.remove(file_path)
            print("audio files deleted")

    #deleted the video files
    for video_filename in video_files:
        file_path=os.path.join(video_folder_path,video_filename)
        if os.path.isfile(file_path):
            os.remove(file_path)
            print("Video files cleaned")


    if serializer.is_valid():
        # save the video
        serializer.save()
        
        # extract the path to the video from the body
        path = f"output/vid/{name_data.replace(' ', '_')}"
        
        # get the video clip
        video_clip = VideoFileClip(path)
        
        # get the audio clip
        audio_clip = video_clip.audio
        
        # extract and export the audio to the desired location
        audio_output = f"output/audio/{name_data.replace(' ', '_')}"
        audio_clip.write_audiofile(audio_output, codec="mp3") 

        # create a FileResponse with the audio file
        response = FileResponse(open(audio_output, 'rb'), content_type='audio/mp3')
        response['Content-Disposition'] = f'attachment; filename="{name_data}"'
        return response

    else:
        return Response(status=status.HTTP_500_INTERNAL_SERVER_ERROR)
