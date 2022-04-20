from django.db import models
from cloudinary.models import CloudinaryField
from apps.tags.models import Tag


class Home(models.Model):
    class Meta(object):
        db_table = 'home'

    tag = models.ForeignKey(
        Tag, on_delete=models.CASCADE, db_index=True
    )

    price = models.IntegerField(
        'Price', blank=False, null=False, db_index=True
    )

    rent_price = models.IntegerField(
        'Rent', blank=False, null=False, db_index=True
    )

    main_image = CloudinaryField(
        'Main_image', blank=True, null=True
    )

    sub_image1 = CloudinaryField(
        'Sub_image1', blank=True, null=True
    )

    sub_image2 = CloudinaryField(
        'Sub_image2', blank=True, null=True
    )

    sub_image3 = CloudinaryField(
        'Sub_image3', blank=True, null=True
    )

    sub_image4 = CloudinaryField(
        'Sub_image4', blank=True, null=True
    )

    state = models.CharField(
        'State', blank=False, null=False, db_index=True, max_length=30, default='State'
    )

    address = models.CharField(
        'Address', blank=False, null=False, db_index=True, max_length=100, default='Address'
    )

    layout = models.CharField(
        'Layout', blank=False, null=False, db_index=True, max_length=30, default='BHK'
    )

    created_at = models.DateTimeField(
        'Created Datetime', blank=True, auto_now_add=True
    )

    updated_at = models.DateTimeField(
        'Updated Datetime', blank=True, auto_now=True
    )


