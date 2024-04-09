"""
Author: Deric Le
Description: Define functions to be used for ServiceNow API
"""

import random 

from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response

# accessible via GET request
# see ~/frontend/src/components/HelloWorld.js to see how it's used
@api_view(['GET'])
def getCalls(request):
    calls = random.randint(0, 10)
    return Response({'data': calls})