"""
Author: Deric Le
Description: Define functions to be used for APIs
"""

from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response

# accessible via GET request
# see ~/frontend/src/components/HelloWorld.js to see how it's used
@api_view(['GET'])
def hello_world1(request):
    return Response({'message': 'Hello from CAPOPS API!'})

@api_view(['GET'])
def hello_world2(request):
    return Response({'message': 'Made by Deric.'})