"""
Author: Deric Le
Description: Define functions to be used for ExtraHop API
"""

import random 

from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response

@api_view(['GET'])
def getCriticals(request):
    criticals = random.randint(5, 15)
    return Response({'data': criticals})

@api_view(['GET'])
def getHighs(request):
    highs = random.randint(40, 100)
    return Response({'data': highs})