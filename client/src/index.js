import React from 'react';
import ReactDOM from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      
  <React.StrictMode>
    <ChakraProvider>
      
  <Auth0Provider
    domain="dev-fpyi1jg2tf72nn88.us.auth0.com"
    clientId="AIDXCYPzNY7cstjlyVUCBTVJ22fUWFD4"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>
    </ChakraProvider>
  </React.StrictMode>
  
);


