export default function ErrorPage({ error }) {
    return (
      <div>
        <h1>Authentication Error</h1>
        <p>An error occurred during authentication: {error}</p>
      </div>
    );
  }