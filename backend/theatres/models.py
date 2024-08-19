from django.db import models

# Create your models here.
class MovieTheatre(models.Model):
    name = models.CharField(max_length=100)
    location = models.CharField(max_length=100)
    capacity = models.IntegerField()
    opening_time = models.TimeField()
    closing_time = models.TimeField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


class TheatreSeat(models.Model):
    theatre = models.ForeignKey(MovieTheatre, on_delete=models.CASCADE)
    seat_row = models.CharField(max_length=1)  # Single letter to represent the row
    number_of_seats = models.PositiveIntegerField()
    row_range = models.CharField(max_length=10, blank=True)  # Can be populated in save method
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def save(self, *args, **kwargs):
        # Calculate the row range based on the number of seats
        if self.number_of_seats > 0:
            self.row_range = f"{self.seat_row}1-{self.seat_row}{self.number_of_seats}"
        else:
            self.row_range = ""
        super().save(*args, **kwargs)

    def __str__(self):
        return f"{self.theatre.name} - Row {self.seat_row} ({self.row_range})"