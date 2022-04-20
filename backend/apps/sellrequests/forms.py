from django import forms
from .models import SellRequest

class SellRequestForm(forms.ModelForm):
    class Meta:
        model = SellRequest
        fields = '__all__'