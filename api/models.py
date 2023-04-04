from django.db import models

# Create your models here.


class Post(models.model):
    # Fields for the post model
    title = models.CharField(max_length=64, blank=True, default='')
    content = models.TextField(blank=True, default='')
    date = models.DateTimeField(auto_now_add=True)

    # Relationship field to the User model
    owner = models.ForeignKey(
        'auth.User', related_name='posts', on_delete=models.CASCADE)

    # Default ordering for Post objects
    class Meta:
        ordering = ['date']
