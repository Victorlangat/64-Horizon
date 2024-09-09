from rest_framework import serializers
from .models import MovieTheatre


class TheatreSerializer(serializers.ModelSerializer):
    class Meta:
        model = MovieTheatre
        fields = '__all__'