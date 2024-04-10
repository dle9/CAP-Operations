# Quickstart
### Using Ubuntu WSL
Start Frontend
```
cd frontend
npm install
npm start
```

Setup Backend
```
python3 -m venv pyvenv
source pyvenv/bin/activate
pip install -r requirements.txt
```

Start Backend (Inside pyvenv)
```
source pyvenv/bin/activate
cd backend
python3 manage.py runserver
```



# File Structure
```
frontend: Frontend code (React)  
backend: Backend code (Django)
capops_api: API code
Carousel: The slideshow container
Carousel items: Fetches from APIs and sends to Carousel
```



# Contribute
### Frontend Development
```
~/frontend/src/assets
  - contains images, backgrounds, icons, etc/
~/frontend/src/components
  - add components here
~/frontend/src/components/Carousel/Carousel.js
  - parent component for landing page 
~/frontend/src/components/Carousel/Conductor.js
  - gathers data from APIs and sends to Carousel 
~/frontend/src/components/Carousel/Thumbnails.js
  - the boxes along the bottom of the screen
~/frontend/src/components/Carousel/items
  - the frontend tools that fetch data from the backend
  ```
### Backend Development
```
~/backend/backend/urls.py
  - **Deploys all URL paths** for the backend server
~/backend/capops_api/views/\<view\>.py 
  - Defines API **functions for a specific View**
~/backend/capops_api/urls
  - **Defines API paths** and uses the API functions from Views
```
### Fullstack step-by-step
```
1. Create a View and define its functions.
2. Create a URLs file and add appropriate URL Paths using functions inside of that View.
3. Define the Fetch functions for the tool inside of Carousel/items
4. Go into Carousel/Conductor.js and add the new data appropriately (The code is very repeatable!)
  - put assets into the appropriate folder
```


# Initialization
### Install Packages
```
source pyvenv/bin/activate
pip install -r requirements.txt

cd frontend
npm install axios react-router-dom
npm i --save @fortawesome/fontawesome-svg-core
npm i --save @fortawesome/free-solid-svg-icons
npm i --save @fortawesome/react-fontawesome@latest
```
### Start Servers
```
source pyvenv/bin/activate

django-admin startproject django_project
npx create-react-app react_app

cd djangoproject
python3 manage.py startapp api
``` 
