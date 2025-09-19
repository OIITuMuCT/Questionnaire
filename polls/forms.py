# forms.py
from django import forms
from .models import Polls

class MyForm(forms.Form):
    text_field = forms.CharField(label="Текстовое поле")
    # Это поле будет скрыто
    hidden_field = forms.CharField(
        label="Появляющееся поле",
        widget=forms.TextInput(
            attrs={"class": "hidden-field", "style": "display: none;"}
        ),
    )

