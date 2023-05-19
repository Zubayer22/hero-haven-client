import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login/Login";
import SignUp from "../pages/Login/SignUp/SignUp";
import AllToys from "../pages/AllToys/AllToys";
import Blogs from "../pages/Blogs/Blogs";
import SingleToyDetails from "../pages/SingleToyDetails/SingleToyDetails";
import MyToys from "../pages/MyToys/MyToys";
import AddToy from "../pages/AddToy/AddToy";

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
            loader: ({params}) => fetch(`http://localhost:3000/products/${params.id}`)
        },
        {
            path: "/my-toys",
            element: <MyToys></MyToys>
        },
        {
            path: "/add-toy",
            element: <AddToy></AddToy>
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