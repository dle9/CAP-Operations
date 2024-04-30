// SOURCE : https://github.com/AzureAD/microsoft-authentication-library-for-js/tree/dev/samples/msal-react-samples/react-router-sample

import { NavigationClient } from "@azure/msal-browser";

// custom navigation to integrate MSAL authentication with client side routing (SPA)
export class CustomNavigationClient extends NavigationClient {
    constructor(navigate) {
        super();
        this.navigate = navigate;
    }

    /**
     * Navigates to other pages within the same web application
     * You can use the useNavigate hook provided by react-router-dom to take advantage of client-side routing
     * @param url
     * @param options
     */
    async navigateInternal(url, options) {
        const relativePath = url.replace(window.location.origin, "");
        if (options.noHistory) {
            this.navigate(relativePath, { replace: true });
        } else {
            this.navigate(relativePath);
        }

        return false;
    }
}