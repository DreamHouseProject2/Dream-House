from django.db import models
from cloudinary.models import CloudinaryField


# Create your models here.
class Tag(models.Model):
    class Meta(object):
        db_table = 'tag'

    name = models.CharField(
        'Name', blank=False, null=False, max_length=50, db_index=True
    )

    image = CloudinaryField(
        'image', blank=True, null=True
    )

    description = models.CharField(
        'Description',blank=True, null=True, max_length= 100
    )

    type = models.CharField(
        'Type', blank=False, null=True, max_length=50, db_index=True
    )

    created_at = models.DateTimeField(
        'Created Datetime', blank=True, auto_now_add=True
    )
    updated_at = models.DateTimeField(
        'Updated Datetime', blank=True, auto_now=True
    )

    def __str__(self):
        return self.name

