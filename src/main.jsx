import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Routers from './Routers/Routers'
import AuthProvider from './Provider/AuthProviders/AuthProviders'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={Routers} />
    </AuthProvider>
  </React.StrictMode>,
)
