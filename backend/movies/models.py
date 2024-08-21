from django.db import models

# Create your models here.
class MovieModel(models.Model):
    title = models.CharField(max_length=255)
    release_date = models.DateField()
    director = models.CharField(max_length=255)
    genre = models.CharField(max_length=255)
    duration = models.IntegerField()
    rating = models.DecimalField(max_digits=3, decimal_places=1)
    description = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)    

class MovieSchedule(models.Model):
    movie = models.ForeignKey(MovieModel, on_delete=models.CASCADE)
    # theatre = models.ForeignKey('theatres.MovieTheatre', on_delete=models.CASCADE)
    show_time = models.DateTimeField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.movie.title} - {self.theatre.name} - {self.show_time}"
    
class ViewHistory(models.Model):
    # movie = models.ForeignKey(MovieModel, on_delete=models.CASCADE)
    # booking = models.ForeignKey('bookings.BookingDB', on_delete=models.CASCADE)
    last_viewed = models.DateTimeField(auto_now=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    def __str__(self):
        return f"{self.movie.title} - {self.user.username} - {self.last_viewed}"
