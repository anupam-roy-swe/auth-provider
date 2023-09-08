import {
    createBrowserRouter,
    
  } from "react-router-dom";
  
import Main from "../Laout/Main";
import Home from "../Component/Home/Home";
import Regester from "../Component/Regester/Regester";
import Login from "../Component/Login/Login";
  
  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,

      children:[
        {path:'/',element:<Home/>},
        {path:'/login',element:<Login/>},
        {path:'/regester', element:<Regester/>},
      ]
    },
  ]);