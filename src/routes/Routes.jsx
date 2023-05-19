import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login/Login";
import SignUp from "../pages/Login/SignUp/SignUp";
import AllToys from "../pages/AllToys/AllToys";
import Blogs from "../pages/Blogs/Blogs";
import SingleToyDetails from "../pages/SingleToyDetails/SingleToyDetails";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: "/all-toys",
            element: <AllToys></AllToys>
        },
        {
            path:"/products/:id",
            element: <SingleToyDetails></SingleToyDetails>,
            loader: ({params}) => fetch(`https://hero-haven-server-nu.vercel.app/products/${params.id}`)
        },
        {
            path: "/blogs",
            element: <Blogs></Blogs>
        },
        {
            path: "/login",
            element: <Login></Login>
        },
        {
            path: "/sign-up",
            element: <SignUp></SignUp>
        }
      ]
    },
  ]);

  export default router;