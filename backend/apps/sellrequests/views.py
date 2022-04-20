from django.shortcuts import render
from rest_framework import generics
from rest_framework import status
from rest_framework.response import Response
from rest_framework.renderers import JSONRenderer
from .serializers import SellRequestSerializer
from .models import SellRequest
from .forms import SellRequestForm
from apps.users.mixins import CustomLoginRequiredMixin
# Create your views here.
class SellRequestAdd(CustomLoginRequiredMixin, generics.CreateAPIView):
    queryset = SellRequest.objects.all()
    serializer_class = SellRequestSerializer

    def post(self, request, *args, **kwargs):
        # Save to order
        request.data["user"] = request.login_user.id
        sellrequest_form = SellRequestForm(request.data)
        # if not sellrequest_form.is_valid():
        #     response = Response({"error": "Request data is not correct."}, status=status.HTTP_404_NOT_FOUND)
        #     response.accepted_renderer = JSONRenderer()
        #     response.accepted_media_type = "application/json"
        #     response.renderer_context = {}
        #     return response

        sellrequest = sellrequest_form.save()

        serializer = SellRequestSerializer([sellrequest], many=True)
        return Response(serializer.data[0])