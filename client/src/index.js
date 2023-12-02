import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Home from './views/home/home'
import './index.css'
import Signup from './views/signup/signup';
import Login from './views/login/login';

const root = ReactDOM.createRoot(document.getElementById('root'));


const router = createBrowserRouter([{
  "path": "/",
  "element": <Home/>
},
{
  "path": "/signup",
  "element": <Signup />

},
{
  "path": "/login",
  "element":<Login />
}
])
root.render(
  <RouterProvider router={router}/>
);

