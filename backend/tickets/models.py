from django.db import models
from django.core.exceptions import ValidationError

# Create your models here.
class MovieTicket(models.Model):
    movie_name = models.CharField(max_length=100)
    ticket_schedule = models.ForeignKey('movies.MovieSchedule', on_delete=models.CASCADE)
    theatre = models.ForeignKey('theatres.MovieTheatre', on_delete=models.CASCADE)
    seat = models.ForeignKey('theatres.TheatreSeat', on_delete=models.CASCADE)
    seat_number = models.PositiveIntegerField()
    show_time = models.DateTimeField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def clean(self):
        # Extract the range from the row_range and check if seat_number is within that range
        row_start, row_end = map(int, self.seat.row_range.split('-')[1].split(self.seat.seat_row))
        if not (row_start <= self.seat_number <= row_end):
            raise ValidationError(f"Seat number {self.seat_number} is not within the valid range for row {self.seat.seat_row}.")

    def save(self, *args, **kwargs):
        # Perform the validation check before saving
        self.clean()
        super().save(*args, **kwargs)

    def __str__(self):
        return f"{self.movie_name} - {self.theatre.name} - {self.seat.seat_row}{self.seat_number} - {self.show_time}"