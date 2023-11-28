# views.py
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .models import Video  # Import your Video model

@csrf_exempt
def upload(request):
    if request.method == 'POST':
        # Assuming the POST data contains the necessary fields for your Video model
        video_data = {
            'title': request.POST.get('title'),
            # Add other fields as needed
        }

        # Create a Video instance with the provided data
        video_instance = Video(**video_data)

        try:
            # Save the Video instance to the database
            video_instance.save()

            return JsonResponse({'message': 'Video saved successfully'})
        except Exception as e:
            return JsonResponse({'message': f'Error saving video: {str(e)}'}, status=500)

    else:
        return JsonResponse({'message': 'Invalid request method'}, status=400)
