# todo/models.py
from django.db import models

class Todo(models.Model):
    text = models.CharField(max_length=255)  # Ensure this is here
    completed = models.BooleanField(default=False)

    def __str__(self):
        return self.text
