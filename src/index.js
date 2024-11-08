import React from "react";
import ReactDom from 'react-dom/client';
import App from './App';
import {
    createBrowserRouter,
    RouterProvider,
    Route,
} from 'react-router-dom';
import History from './Components/pages/History'


const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <App/>
      ),
    }
    ,{
      path: "History",
      element: (
        <History/>
      ),
    },
  ]);
const root=ReactDom.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router}/>
)