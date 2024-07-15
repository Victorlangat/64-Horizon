from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import MovieModel
from .serializers import MovieSerializer

# Create your views here.

class MovieListAPIView(APIView):
    def get(self, request):
        movies = MovieModel.objects.all()
        serializer = MovieSerializer(MovieModel, many=True)
        return Response(serializer.data)
