from .models import Tag
from rest_framework import serializers


class TagSerializer(serializers.ModelSerializer):
    image = serializers.ImageField(allow_null=True)

    class Meta:
        model = Tag
        fields = '__all__'
