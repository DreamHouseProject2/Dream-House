from django.urls import path
from . import views

urlpatterns = [
    path('', views.HomeList.as_view(), name='home_list'),
    path('<int:pk>/', views.HomeDetail.as_view(), name='home_detail'),
]