import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home.jsx';
import AccountantDetails from './Components/AcountenenDetails/AcountenenDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children : [
      {
        path : "/",
        element : <Home/>
      },
      {
        path : "/accountant/:Id",
        element : <AccountantDetails/>,
        loader : () => fetch('https://desing-challenge-backend.vercel.app/acountent')
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
