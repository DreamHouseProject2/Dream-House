from django.urls import path
from . import views

urlpatterns = [
    path('add/', views.SellRequestAdd.as_view(), name='sellrequest_add'),
]
