from django.urls import path
from .views import *

urlpatterns = [
    path('movies/all', MovieListAPIView.as_view(), name='movies'),
    path('movies/single', MovieDetailAPIView.as_view(), name='movies'),
]