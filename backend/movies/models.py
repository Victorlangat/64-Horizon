from django.db import models
from datetime import datetime

# Create your models here.
class MovieModel(models.Model):
    title = models.CharField(max_length=255, blank=True, null=True)
    release_date = models.DateField(default=datetime.now, blank=True, null=True)
    director = models.CharField(max_length=255, blank=True, null=True)
    genre = models.CharField(max_length=255, blank=True, null=True)
    duration = models.FloatField(blank=True, null=True)
    rating = models.DecimalField(max_digits=3, decimal_places=1, blank=True, null=True)
    description = models.TextField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True, blank=True, null=True)    

class MovieSchedule(models.Model):
    movie = models.ForeignKey(MovieModel, on_delete=models.CASCADE, blank=True, null=True)
    theatre = models.ForeignKey('theatres.MovieTheatre', on_delete=models.CASCADE, blank=True, null=True)
    show_time = models.DateTimeField(default=datetime.now, blank=True, null=True)
    available_seats = models.IntegerField(blank=True, null=True, default=100)
    created_at = models.DateTimeField(auto_now_add=True, blank=True, null=True)
    updated_at = models.DateTimeField(auto_now=True, blank=True, null=True)

    def __str__(self):
        return f"{self.movie.title} - {self.theatre.name} - {self.show_time}"
    
class ViewHistory(models.Model):
    movie = models.ForeignKey(MovieModel, on_delete=models.CASCADE, blank=True, null=True)
    booking = models.ForeignKey('bookings.BookingDB', on_delete=models.CASCADE, blank=True, null=True)
    user_id = models.CharField(max_length=255, blank=True, null=True)
    last_viewed = models.DateTimeField(auto_now=True, blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True, blank=True, null=True)
    updated_at = models.DateTimeField(auto_now=True, blank=True, null=True)
    
    def __str__(self):
        return f"{self.movie.title} - {self.user.username} - {self.last_viewed}"
