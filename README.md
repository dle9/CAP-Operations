# Quickstart
### Setup
Start Frontend
```
cd frontend
npm install
npm start
```
Enter Python Virtual Environment (New Terminal)
```
source pyvenv/bin/activate
```
Start Backend
```
cd backend
python3 manage.py runserver
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
- Carousel: The slideshow container
- Carousel items: Fetches from APIs and sends to Carousel



# Contribute
### Define a URL path for an API
- ~/backend/backend/urls.py
  - **Deploys all URL paths** for the backend server
- ~/backend/capops_api/views/\<view\>.py 
  - Defines static API **functions for a specific view**
- ~/backend/capops_api/urls
  - **Defines API paths** and uses the static API functions from views



# Development
### Initialization
```
source pyvenv/bin/activate
pip install django

django-admin startproject django_project
npx create-react-app react_app

cd djangoproject
python3 manage.py startapp api
```
### Install Packages
```
source pyvenv/bin/activate
pip install djangorestframework django-cors-headers

cd frontend
npm install axios react-router-dom
npm i --save @fortawesome/fontawesome-svg-core
npm i --save @fortawesome/free-solid-svg-icons
npm i --save @fortawesome/react-fontawesome@latest
```