# Cybersecurity Apprenticeship Program
Howdy, Hello, welcome, greetings, salutations.

# Quickstart (Running locally)
### Using Ubuntu WSL
Start Frontend
```
cd frontend
npm install
npm start
```

Start Backend (Recommended: use python venv)
```
pip install -r requirements.txt
cd backend
python3 manage.py runserver
```

Environment Variables
```
Message Deric Le on Microsoft Teams
```



# File Structure
### Security
```
src/index.js
  - creates the Microsoft Authentication Library (MSAL) instance
  - passes the instance to App
src/App.js
  - becomes the MSAL Provider with the MSAL instance 
  - allows all children to have access to the MSAL instance
src/msalConfig.js
  - configuration for MSAL
src/utils/NavigationClient.js
  - uses custom navigation to ensure MSAL 
  - authentication in a single page application (SPA)
.github/map-environment-variables.yml
  - GitHub action/workflow
  - uses GitHub secrets to store encrypted environment variables used in the application
```
### Frontend
```
src/assets
  - contains images, backgrounds, icons, etc/
src/pages
  - add new pages here
src/ui-components
  - buttons, navbar, popups, etc.
src/utils
  - utility functions, e.g., navigation, graphs
```
### Backend
```
backend/settings.py
  - the main backend configuration
backend/urls.py
  - Deploys all URL paths for the backend server
capops_api/views/\<view\>.py 
  - Defines API functions for a specific View
capops_api/urls
  - Defines API paths and uses the API functions from Views
```



# Contribute
### Security
```
environment variables
  - .github/map-environment-variables.yml
  - add a new Environemnt Secret in Settings > Secrets and Variables
  - update the map-environment-variables.yml file accordingly 
example of page rendering based off of authentiation status
  - src/pages/Home.jsx
example of component rendering based off of authentication status
  - src/pages/HomeButton.jsx
example of protected route
  - src/pages/Profile.jsx
```
### Frontend
```
styling
  - src/assets/styles/theme.js
  - src/assets/styles/index.css
global page components
  - src/ui-components/PageLayout.jsx
  - src/ui-components/NavBar.jsx
popups
  - src/ui-components/SignInSignOutButton/SignOutButton.jsx
  - src/ui-components/AccountPicker.jsx
```
### Backend
```
TODO
```
### Fullstack step-by-step
```
TODO
```



# TODO
```
- (1) complete migration from css to mui elements
- (2) protect secrets with serverless functions or something
- (3) fix bug where if secrets used in msalConfig.js is empty string or null, there is "interaction_in_progress" error  
  - use documentation (7)
- threat intelligence feed
- feedback button > <email>
- allow user to choose which tool plays notification
- add volume buttons for each thumbnail
```



# Additional Documentation
```
(1) https://create-react-app.dev/docs/getting-started/
(2) https://docs.djangoproject.com/en/5.0/intro/overview/
(3) https://www.npmjs.com/package/@azure/msal-react
(4) https://mui.com/material-ui/getting-started/installation/
(5) https://www.npmjs.com/package/@azure/msal-react
(6) https://github.com/AzureAD/microsoft-authentication-library-for-js/tree/dev/samples/msal-react-samples/react-router-sample
(7) https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-browser/docs/errors.md#browserautherrors
(8) https://docs.github.com/en/actions/security-guides/using-secrets-in-github-actions
(9) https://docs.github.com/en/actions/using-workflows/about-workflows
```
