from django.contrib import admin
from .models import BookingDB, Seats

# Register your models here.
admin.site.register(BookingDB)
admin.site.register(Seats)