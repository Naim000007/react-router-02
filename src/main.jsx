/* eslint-disable no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Component/Home.jsx';
import Contact from './Component/Contact.jsx';
import About from './Component/About.jsx';
import First from './Component/First.jsx';
import Friends from './Component/Friends.jsx';
import Frienddetailes from './Component/Frienddetailes.jsx';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element : <h1>hi every one</h1>
//   },
//   {
//     path: 'about',
//     element : <>hi this is about page </>
//   }
// ]);
const router = createBrowserRouter([
  {
    path:'/',
    element:<Home />,
    children: [
      {
        path:'/',
        element: <First />,
      },
      {
        path: 'friend/:friendid',
        element: <Frienddetailes />,
        loader : ({params})=> fetch(`https://jsonplaceholder.typicode.com/users/${params.friendid}`)
      },
      {
        path: 'friends',
        element: <Friends />,
        loader: ()=> fetch('https://jsonplaceholder.typicode.com/users')
      },
      {
        path:'/contact',
        element: <Contact></Contact>
      },
      {
        path:'/about',
        element: <About />
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
</React.StrictMode>
)
