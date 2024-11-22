import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; 
import { Auth0Provider } from '@auth0/auth0-react';  // Import Auth0
import reportWebVitals from './reportWebVitals';

// Set up Auth0 configuration
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    domain='dev-h3lp6cuz2pufy2iv.us.auth0.com'  // Your Auth0 domain
    clientId='z91wZ1Jmcvj1mCBCxZY3dh4os6W0RhCw'  // Your Auth0 client ID
    redirectUri={window.location.origin}  // Redirect URI after login
  >
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Auth0Provider>
);

// Measure app performance (optional)
reportWebVitals();
