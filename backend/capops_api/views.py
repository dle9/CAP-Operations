"""
Author: Deric Le
Description: Define static functions to be used for APIs
"""

from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response

@api_view(['GET'])
def hello_world(request):
    return Response({'message': 'Hello from CAPOPS API!'})