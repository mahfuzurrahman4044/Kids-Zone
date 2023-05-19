import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Layout from './Layout/Layout';
import Home from './Home/Home';
import Login from './Account/Login';
import SignUp from './Account/SignUp';
import AuthProvider from './Provider/AuthProvider';
import AddToys from './Products/AddToys';
import MyToys from './Products/MyToys/MyToys';
import AllToys from './Products/AllToys/AllToys';
import Error from './Error/Error';
import UpdateToys from './Products/UpdateToys';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>
      },
      {
        path: '/addToys',
        element: <AddToys></AddToys>
      },
      {
        path: "/myToys",
        element: <MyToys></MyToys>
      },
      {
        path: '/myToys/update/:id',
        element: <UpdateToys></UpdateToys>,
        loader: ({ params }) => fetch(`http://localhost:5000/updateToys/${params.id}`)
      },
      {
        path: "/allToys",
        element: <AllToys></AllToys>,
        loader: () => fetch('http://localhost:5000/addToy')
      }
    ]
  },
  {
    path: "*",
    element: <Error></Error>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider><RouterProvider router={router} /></AuthProvider>
  </React.StrictMode>,
)
