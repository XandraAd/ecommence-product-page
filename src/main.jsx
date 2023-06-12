import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter as Router } from 'react-router-dom'
import { store } from './store/store.js'
import { Provider } from 'react-redux'
//import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
     <React.StrictMode>
    <Router>
      <App />
      </Router>
  </React.StrictMode>
  </Provider>
 
   ,
)
