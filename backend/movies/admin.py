from django.contrib import admin
from .models import MovieModel, MovieSchedule, ViewHistory

# Register your models here.
admin.site.register(MovieModel)
admin.site.register(MovieSchedule)
admin.site.register(ViewHistory)