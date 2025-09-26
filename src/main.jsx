import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Auth0Provider } from '@auth0/auth0-react';
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Auth0Provider
    domain="dev-svs2pjt7tt3jrvlz.us.auth0.com"
    clientId="28OFyTidzLpyQcR5cBI2YBZpZe5na5ZW"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>,
  </StrictMode>,
)
