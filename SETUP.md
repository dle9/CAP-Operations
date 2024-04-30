# Initialization

### Install Frontend packages
```
cd frontend
npm i axios react-router-dom
npm i @azure/msal-react @azure/msal-browser
npm i @mui/material @emotion/react @emotion/styled @mui/icons-material
```

### Install Backend packages
```
pip install -r requirements.txt
pip install django-cors-headers pip install djangorestframework
```

### Create Stack
```
django-admin startproject backend 
npx create-react-app frontend

cd backend
python3 manage.py startapp capops_api
``` 



# Security
### Microsoft Azure Authentication
```
Client ID: unique identifier for an application in Azure AD
	- Requires escalated privileges
	- Microsoft Azure > Search > App registrations > New registration
Tenant ID: unique identifier that specifies the Azure AD tenant to use
	- a tenant is an instance of Azure AD
	- Microsoft Azure > Search > Tenant Properties
```

### GitHub Secrets
Organization and repository secrets are read when a workflow run is queued, and environment secrets are read when a job referencing the environment starts.
```
create a workflow
	Repository > Actions > New Workflow > .github/workflows/<new workflow here>
```



# Additional Documentation
```
https://github.com/gitname/react-gh-pages
https://github.com/tschaub/gh-pages
https://learn.microsoft.com/en-us/entra/identity-platform/quickstart-register-app
https://docs.github.com/en/actions/security-guides/using-secrets-in-github-actions
https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows
```