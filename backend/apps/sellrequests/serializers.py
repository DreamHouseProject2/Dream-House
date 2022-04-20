from .models import SellRequest
from rest_framework import serializers


class SellRequestSerializer(serializers.ModelSerializer):

    class Meta:
        model = SellRequest
        fields = '__all__'
