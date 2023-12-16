import React from 'react'
import ReactDOM from 'react-dom/client'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import App, { reducer } from './App.jsx'
import './index.css'


const store = configureStore({ reducer: reducer }) 



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store= { store }>
    <App />
    </Provider>
  </React.StrictMode>,
)
