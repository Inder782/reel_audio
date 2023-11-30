from django.views.decorators.csrf import csrf_exempt
from .models import Video
from rest_framework import status
from rest_framework.response import Response
from .serializer import VideoSerializer
from rest_framework.decorators import api_view

# Create your views here.

@csrf_exempt
@api_view(["POST"])
def Videohandle(request):
    print(request.data)
    serializer=VideoSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(status=status.HTTP_200_OK)
    else:
        return Response(status=status.HTTP_500_INTERNAL_SERVER_ERROR)


