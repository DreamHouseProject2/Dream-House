from apps.users.serializers import UserSerializer
from .models import Favourite
from rest_framework import serializers


class FavouriteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Favourite
        fields = '__all__'
       # depth = 1

class ListFavouriteSerializer(serializers.ModelSerializer):
    user = UserSerializer(many = False, read_only = True)

    class Meta:
        model = Favourite
        fields = '__all__'
        depth = 1
