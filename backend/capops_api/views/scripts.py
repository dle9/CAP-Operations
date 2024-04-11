import os
from rest_framework.decorators import api_view
from rest_framework.response import Response

@api_view(['GET'])
def list_all_scripts(request) :
    systemCommand = "python3 Technology-Services-Security-python-tools/scripts/snowscript/snowscript.py -l"
    lookupdata = os.popen(systemCommand).read()
    return Response({'message': lookupdata})