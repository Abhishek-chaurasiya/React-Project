
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import * as serviceWorker from './serviceWorker';
import { GithubProvider } from './context/context';
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Auth0Provider
      domain='dev-075kpf4e1zxdlurn.us.auth0.com'
      clientId='a1TDKsdplcsaApsESV5bDfC0GqffHz4B'
      redirectUri={window.location.origin}
      cacheLocation='localstorage'
    >
      <GithubProvider>
        <App />
      </GithubProvider>
    </Auth0Provider>
  </React.StrictMode>
);

// dev-075kpf4e1zxdlurn.us.auth0.com
// a1TDKsdplcsaApsESV5bDfC0GqffHz4B