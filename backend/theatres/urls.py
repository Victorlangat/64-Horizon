from django.urls import path
from .views import *

urlpatterns = [
    path('theatres/', TheatreListAPIView.as_view(), name='theatres-list'),
    path('theatres/<int:pk>/', TheatreDetailAPIView.as_view(), name='theatre-detail')
]