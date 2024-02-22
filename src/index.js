import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './ReduxStore/store.js'
import {GoogleOAuthProvider} from '@react-oauth/google'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="894204395138-pan94olri3t94o2vjijnhl6q8fl1agdu.apps.googleusercontent.com"
>
{/* <CookiesProvider defaultSetOptions> */}
     <Provider store={store}>
    <App />
    </Provider>
    {/* </CookiesProvider> */}
    </GoogleOAuthProvider>
  </React.StrictMode>,
)
