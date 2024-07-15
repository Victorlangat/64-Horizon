from rest_framework import serializers
from .models import MovieModel

class MovieSerializer(serializers.ModelSerializer):
    class Meta:
        model = MovieModel
        fields = '__all__'