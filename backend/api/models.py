from django.db import models
from django.utils import timezone

# Create your models here.


class Post(models.Model):
    # Fields for the post model
    title = models.CharField(max_length=64, blank=True, default='')
    content = models.TextField(blank=True, default='')
    date = models.DateTimeField(default=timezone.now())

    # Relationship field to the User model
    owner = models.ForeignKey(
        'auth.User', related_name='posts', on_delete=models.CASCADE)

    # Sets default ordering for Post objects
    class Meta:
        ordering = ['-date']

    # Renames Post objects
    def __str__(self):
        return f'{self.owner}: {self.title}'
