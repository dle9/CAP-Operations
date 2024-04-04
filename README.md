# File Structure
- capops_api: API code
- pyvenv: python virtual envt.
- frontend: frontend code (React)  
- backend: backend code (Django)

# Development
### Work in the Python Virtual Environment
```
~$ source pyvenv/bin/activate
```

### Initialization
```
(pyvenv) ~$ pip install django
(pyvenv) ~$ django-admin startproject <proj name>
~$ npx create-react-app <app name>
```

### Packages required
```
(pyvenv) ~$ pip install djangorestframework django-cors-headers
~/frontend$ npm install axios 
```

### Start Servers
```
~$ cd react_frontend; npm start
(pyvenv) ~$ python3 django/backend/manage.py runserver 
```

# Contribute
### Define a URL path for an API
- ~/backend/backend/urls.py
  - Contains **all URL paths** for the backend server
- ~/backend/capops_api/views/\<view\>.py 
  - Defines static API **functions for a specific view**
- ~/backend/capops_api/urls
  - Defines API paths and uses the static API functions from views

# Quickstart
### Backend
- See 'Contribute' section. 
- View 'Hello World' files in this order (don't forget to review comments!):
  -  ~/backend/backend/urls.py
  -  ~/backend/capops_api/views/helloworld.py
  -  ~/backend/capops_api/urls/helloworld.py
### Frontend
- Follow component structure
- View ~/frontend/src/App.js
- View ~/frontend/src/components/HelloWorld.js
### More  info
- Last resort: Ask Deric