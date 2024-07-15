from django.urls import path
from .views import MovieListAPIView

urlpatterns = [
    path('movies/all', MovieListAPIView.as_view(), name='movies'),
]