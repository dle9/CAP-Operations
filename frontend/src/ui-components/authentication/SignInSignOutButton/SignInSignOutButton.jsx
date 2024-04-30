import { useIsAuthenticated, useMsal } from "@azure/msal-react";
import { InteractionStatus } from "@azure/msal-browser";
import { SignInButton } from "./SignInButton";
import { SignOutButton } from "./SignOutButton";

const SignInSignOutButton = () => {
    // get msal instance
    const { inProgress } = useMsal();
    const isAuthenticated = useIsAuthenticated();

    // return sign in or sign out button depending 
    // on user's authentication status
    if (isAuthenticated) {
        return <SignOutButton />;
    } else if (inProgress !== InteractionStatus.Startup && inProgress !== InteractionStatus.HandleRedirect) {
        return <SignInButton />;
    } else {
        return null;
    }
}

export default SignInSignOutButton;