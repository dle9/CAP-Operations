# Quickstart
### Setup
Start Frontend
```
~/frontend$ npm install; npm start
```
Enter Python Virtual Environment (New Terminal)
```
~$ source pyvenv/bin/activate
```
Start Backend
```
(pyvenv) ~/backend$ python3 -m manage.py runserver
```
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



# File Structure
- pyvenv: python virtual envt.
- frontend: frontend code (React)  
- backend: backend code (Django)
- capops_api: API code



# Contribute
### Define a URL path for an API
- ~/backend/backend/urls.py
  - Contains **all URL paths** for the backend server
- ~/backend/capops_api/views/\<view\>.py 
  - Defines static API **functions for a specific view**
- ~/backend/capops_api/urls
  - Defines API paths and uses the static API functions from views



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