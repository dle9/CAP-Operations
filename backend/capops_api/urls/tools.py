"""
Author: Deric Le
Description: Define URL paths
"""

from django.urls import path
from capops_api.views import servicenow, crowdstrike, extrahop, elastic

urlpatterns = [
    # ServiceNow
    path('SNOW/calls', servicenow.getCalls, name='SNOW-calls'),

    # CrowdStrike
    path('CS/detections/criticals', crowdstrike.getCriticals, name='CS-criticals'),
    path('CS/detections/highs', crowdstrike.getHighs, name='CS-highs'),

    # ExtraHop
    path('EH/detections/criticals', extrahop.getCriticals, name='EH-criticals'),
    path('EH/detections/highs', extrahop.getHighs, name='EH-highs'),

    # Elastic
    path('EL/detections/criticals', extrahop.getCriticals, name='EL-criticals'),
    path('EL/detections/highs', extrahop.getHighs, name='EL-highs'),
]