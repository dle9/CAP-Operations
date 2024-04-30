import { LogLevel } from "@azure/msal-browser";

// Browser check variables
const ua = window.navigator.userAgent;
const msie = ua.indexOf("MSIE ");
const msie11 = ua.indexOf("Trident/");
const msedge = ua.indexOf("Edge/");
const firefox = ua.indexOf("Firefox");
const isIE = msie > 0 || msie11 > 0;
const isEdge = msedge > 0;
const isFirefox = firefox > 0;

// Config object to be passed to Msal on creation
export const msalConfig = {

    // which Azure application and Tenant (AD instance) to use?
    auth: {
        clientId: process.env.REACT_APP_CLIENT_ID,
        authority: process.env.REACT_APP_AUTHORITY,
        redirectUri: "/",
        postLogoutRedirectUri: "/",
    },

    // caching tokens
    cache: {
        cacheLocation: "localStorage",
        storeAuthStateInCookie: isIE || isEdge || isFirefox,
    },

    // basic system configurations such as
	 // logging
    system: {
        allowNativeBroker: false, 
        loggerOptions: {
            loggerCallback: (level, message, containsPii) => {
                if (containsPii) {
                    return;
                }
                switch (level) {
                    case LogLevel.Error:
                        console.error(message);
                        return;
                    case LogLevel.Info:
                        console.info(message);
                        return;
                    case LogLevel.Verbose:
                        console.debug(message);
                        return;
                    case LogLevel.Warning:
                        console.warn(message);
                        return;
                    default:
                        return;
                }
            },
        },
    },
};

/**
 * define scope of the ID token
 * @param User.Read : allow application to read profile of sign-in user
 */
export const loginRequest = {
    scopes: ["User.Read"]
};

// example of calling MS Graph API with token
export const graphConfig = {
    graphMeEndpoint: "https://graph.microsoft.com/v1.0/me"
};
