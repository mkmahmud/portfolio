import React from 'react';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Main from '../../Layout/Main';
import Home from '../../Pages/Home/Home';
import Details from '../../Pages/Projects/Details/Details';

const Router = () => {
 
    const router = createBrowserRouter([
        {
          path: "/",
          element: <Main></Main>,
          children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
              path:'details',
              element: <Details></Details>
            }
          ]
        },
      ]);

    return (
        <RouterProvider router={router} />
    );
};

export default Router;