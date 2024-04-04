"""
Author: Deric Le
Description: Define URL paths
"""

from django.urls import path

"""
This is the ~/backend/capops_api/views folder.
"view_helloworld" is a .py file in this folder
which is imported as a module. You can call its 
functions as shown below.
"""
from capops_api.views import helloworld

urlpatterns = [
    path('hello-world1/', helloworld.hello_world1, name='hello_world1'),

    path('temp/hello-world2/', helloworld.hello_world2, name='hello_world2'),

    # add more paths here
]