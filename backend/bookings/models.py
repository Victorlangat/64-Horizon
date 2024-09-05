
# Create your models here.
from datetime import datetime  # Add this import
from django.db import models
from django.conf import settings

class BookingDB(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, blank=True, null=True)
    name = models.CharField(max_length=100, blank=True, null=True)
    email = models.EmailField(blank=True, null=True)
    phone = models.CharField(max_length=15, blank=True, null=True)
    movie = models.ForeignKey('movies.MovieModel', on_delete=models.CASCADE, blank=True, null=True)
    show_time = models.ForeignKey('movies.MovieSchedule', on_delete=models.CASCADE, blank=True, null=True)
    theatre = models.ForeignKey('theatres.MovieTheatre', on_delete=models.CASCADE, blank=True, null=True)
    booking_date = models.DateTimeField(default=datetime.now, blank=True, null=True)
    seats_booked = models.IntegerField(blank=True, null=True)
    seat_number = models.ForeignKey('theatres.TheatreSeat', on_delete=models.CASCADE, blank=True, null=True)
    payment_status = models.BooleanField(default=False, blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)  # No need for default here
    updated_at = models.DateTimeField(auto_now=True)      # No need for default here
    amount = models.DecimalField(max_digits=10, decimal_places=2, blank=True, null=True)

    def __str__(self):
        return f"{self.name} - {self.movie} - {self.show_time} - {self.seat_number}"


    def __str__(self):
        return f"{self.name} - {self.movie} - {self.show_time} - {self.seat_number}"
    
class Seats(models.Model):
    seat_number = models.PositiveIntegerField(blank=True, null=True)
    seat_id = models.CharField(max_length=10, blank=True, null=True)
    booking_id = models.ForeignKey(BookingDB, on_delete=models.CASCADE, blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True, blank=True, null=True)
    updated_at = models.DateTimeField(auto_now=True, blank=True, null=True)

    def __str__(self):
        return f"{self.seat_row}{self.seat_number} - {self.seat_status}"
        


class Payment(models.Model):
    booking = models.ForeignKey(BookingDB, on_delete=models.CASCADE, blank=True, null=True)
    payment_id = models.CharField(max_length=100, blank=True, null=True)
    payment_amount = models.DecimalField(max_digits=10, decimal_places=2, blank=True, null=True)
    payment_status = models.BooleanField(default=False, blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True, blank=True, null=True)
    updated_at = models.DateTimeField(auto_now=True, blank=True, null=True)

    def __str__(self):
        return f"{self.booking} - {self.payment_id} - {self.payment_status}"