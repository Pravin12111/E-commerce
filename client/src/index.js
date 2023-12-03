import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Home from './views/home/home'
import './index.css'
import Signup from './views/signup/signup';
import Login from './views/login/login';
import Buy from './views/Buy/Buy';
import Myorders from './views/Myorders/Myorders';

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
},
{
  "path": "/buy/:id",
  "element": <Buy/>
},
{
  "path":"/orders",
  "element": <Myorders/>
}
])
root.render(
  <RouterProvider router={router}/>
);

