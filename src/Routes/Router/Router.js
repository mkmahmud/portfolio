import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from '../../Layout/Main';
import Aboutme from '../../Pages/Aboutme/Aboutme';
import AllProjects from '../../Pages/AllProjects/AllProjects';
import Home from '../../Pages/Home/Home';
import Details from '../../Pages/Projects/Details/Details';

const Router = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path:'/aboutme',
          element: <Aboutme></Aboutme>
        },
        {
          path:'/projects',
          element: <AllProjects></AllProjects>
        },
        {
          path: '/details/:index',
          loader: async ({params}) => {
            return fetch('myprojects.json')
          } ,
          element: <Details></Details>
        },
      ]
    },
  ]);

  return (
    <RouterProvider router={router} />
  );
};

export default Router;