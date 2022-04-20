from rest_framework import generics
from .serializers import TagSerializer
from .models import Tag

class TagList(generics.ListAPIView):
    queryset = Tag.objects.order_by('-created_at').all()
    serializer_class = TagSerializer


class TagAdd(generics.CreateAPIView):
    queryset = Tag.objects.all()
    serializer_class = TagSerializer


class TagDetail(generics.RetrieveAPIView, generics.UpdateAPIView):
    queryset = Tag.objects.all()
    serializer_class = TagSerializer


class TagDelete(generics.DestroyAPIView):
    queryset = Tag.objects.all()
    serializer_class = TagSerializer
