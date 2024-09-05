from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import MovieModel
from .serializers import MovieSerializer

# Create your views here.


class MovieListAPIView(APIView):
    def get(self, request):
        movies = MovieModel.objects.all()  # Fetch all movie records
        serializer = MovieSerializer(movies, many=True)  # Serialize the queryset
        return Response(serializer.data)  

class MovieDetailAPIView(APIView):
    def patch(self, request):
        movie_id = request.data.get('id')
        if movie_id:
            try:
                movie = MovieModel.objects.get(id=movie_id)  # Find the movie by title
            except MovieModel.DoesNotExist:
                return Response({"error": "Movie not found"}, status=404)
            
            serializer = MovieSerializer(movie, data=request.data, partial=True)  # Partial update
            if serializer.is_valid():
                serializer.save()  # Save the changes
                return Response(serializer.data)
            return Response(serializer.errors, status=400)  # Return validation errors if any
        else:
            return Response({"error": "Title is required"}, status=400)
