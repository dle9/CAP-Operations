"""
Author: Deric Le
Description: Define functions to be used for APIs
"""

import random 

from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response

# accessible via GET request
# see ~/frontend/src/components/HelloWorld.js to see how it's used
@api_view(['GET'])
def getCriticals(request):
    criticals = random.randint(1, 10)
    return Response({'data': criticals})

@api_view(['GET'])
def getHighs(request):
    highs = random.randint(1, 100)
    return Response({'data': highs})