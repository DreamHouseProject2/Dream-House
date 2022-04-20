from django.db import models
from apps.users.models import User

class SellRequest(models.Model):
    class Meta(object):
        db_table = 'sellrequest'

    user = models.ForeignKey(
        User, on_delete=models.CASCADE
    )
    address = models.CharField(
        'Address', blank=False, null=False, db_index=True, max_length=100, default='Address'
    )
    sqft = models.CharField(
        'SQFT', blank=False, null=False, max_length=50, db_index=True, default='SQFT'
    )
    age_building = models.IntegerField(
        'Age of Building', blank=False, null=False, db_index=True 
    )
    created_at = models.DateTimeField(
        'Created Datetime', blank=True, auto_now_add=True
    )
    updated_at = models.DateTimeField(
        'Updated Datetime', blank=True, auto_now=True
    )