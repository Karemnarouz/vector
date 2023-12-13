import * as React from "react";
import App from "./App";


import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  
} from "react-router-dom";
import Menu from "./Menu";
import Blog from "./Blog";
import Contact from "./Contact";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
    
  },
  {
    path:"ourmenu",
    element:<Menu/>   
  },
  {
    path:"blog",
    element:<Blog/>   
  },
  {
    path:"contact",
    element:<Contact/>   
  },
 
  
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
