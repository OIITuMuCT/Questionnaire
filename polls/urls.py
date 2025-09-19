from django.urls import path

from . import views

app_name = 'polls'

urlpatterns = [
    path('', views.polls_list, name='polls_list'),
    path('<int:id>/', views.polls_detail, name='polls_detail'),
    # urls.py
    path('my_page/', views.my_view, name='my_view'),
]
