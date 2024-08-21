from django.db import models

# Create your models here.
class BookingDB(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    phone = models.CharField(max_length=15)
    # movie = models.ForeignKey('movies.MovieModel', on_delete=models.CASCADE)
    show_time = models.DateTimeField()
    # seat_number = models.ForeignKey('theatres.TheatreSeat', on_delete=models.CASCADE)
    payment_status = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    amount = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return f"{self.name} - {self.movie} - {self.show_time} - {self.seat_number}"
    
class Seats(models.Model):
    seat_number = models.PositiveIntegerField()
    seat_id = models.CharField(max_length=10)
    # booking_id = models.ForeignKey(BookingDB, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.seat_row}{self.seat_number} - {self.seat_status}"
        


class Payment(models.Model):
    # booking = models.ForeignKey(BookingDB, on_delete=models.CASCADE)
    payment_id = models.CharField(max_length=100)
    payment_status = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.booking} - {self.payment_id} - {self.payment_status}"