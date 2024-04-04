"""
Author: Deric Le
Description: Define URL paths
"""

from django.urls import path
from . import views

urlpatterns = [
    path('hello-world/', views.hello_world, name='hello_world'),
]