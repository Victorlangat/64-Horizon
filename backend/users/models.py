from django.contrib.auth.models import User
from django.db import models
from django.conf import settings


class UserProfile(models.Model):
    user = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)

    # Add any additional fields you need for your user profile

    def __str__(self):
        return self.user.username