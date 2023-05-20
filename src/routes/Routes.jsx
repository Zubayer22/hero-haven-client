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
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
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
            element: <PrivateRoute><SingleToyDetails></SingleToyDetails></PrivateRoute>,
            loader: ({params}) => fetch(`http://localhost:3000/products/${params.id}`)
        },
        {
            path: "/my-toys",
            element: <PrivateRoute><MyToys></MyToys></PrivateRoute>
        },
        {
            path: "/add-toy",
            element: <PrivateRoute><AddToy></AddToy></PrivateRoute>
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