export default function ErrorPage({ error }) {
  let errorMessage;

  if (!error) {
    console.error('Error prop is undefined in ErrorPage component');
  }

  if (error) {
    switch (error) {
      case "OAuthCallback":
        errorMessage = "There was an issue with the OAuth callback.";
        break;
      case "OAuthCreateAccount":
        errorMessage = "There was an issue creating your account using OAuth.";
        break;
      case "OAuthSignin":
        errorMessage = "There was an issue signing in with OAuth.";
        break;
      case "CredentialsSignin":
        errorMessage = "Your sign-in credentials are incorrect.";
        break;
      default:
        errorMessage = "An unknown error occurred during authentication.";
    }
  } else {
    errorMessage = "An unknown error occurred during authentication.";
  }

  return (
    <div>
      <h1>Authentication Error</h1>
      <p>An error occurred during authentication: {errorMessage}</p>
    </div>
  );
}