"""
Author: Deric Le
Description: Define URL paths
"""

from django.urls import path
from capops_api.views import servicenow, crowdstrike, extrahop

urlpatterns = [
    path('SNOW/calls', servicenow.getCalls, name='SNOW-calls'),

    path('CS/detections/criticals', crowdstrike.getCriticals, name='CS-criticals'),
    path('CS/detections/highs', crowdstrike.getHighs, name='CS-highs'),

    path('EH/detections/criticals', extrahop.getCriticals, name='EH-criticals'),
    path('EH/detections/highs', extrahop.getHighs, name='EH-highs'),
]