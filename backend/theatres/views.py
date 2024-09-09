from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import MovieTheatre
from .serializers import TheatreSerializer 


# Create your views here.

  # API to list all theatres

class TheatreListAPIView(APIView):
    def get(self, request):
        theatres = MovieTheatre.objects.all()
        serializer = TheatreSerializer(theatres, many=True)
        return Response(serializer.data)
    

    # API to handle single theatre details

class TheatreDetailAPIView(APIView)
    def patch(self, request, pk=None):
        theatre =  get_object(MovieTheatre, pk=pk) # Find theatre by primary key(id)
        serializer = TheatreSerializer(data=request.data,partial=True) # partial update
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=400)

