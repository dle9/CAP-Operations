# File Structure
- capops_api: API code
- pyvenv: python virtual envt.
- frontend: frontend code (React)  
- backend: backend code (Django)

# Development
### Work in the Python Virtual Environment
~/rootdir$ source pyvenv/bin/activate

### Initialization
(pyvenv) $ pip install django
(pyvenv) $ django-admin startproject <proj name>
npx create-react-app <app name>

### Packages required
(pyvenv) $ pip install djangorestframework django-cors-headers
~/frontend$ npm install axios 

### Local Workspace Development
- Run frontend server : ~working dir$ cd react_frontend; npm start
- Run backend server  : (pyvenv) ~working dir$ python3 django/backend/manage.py runserver 
