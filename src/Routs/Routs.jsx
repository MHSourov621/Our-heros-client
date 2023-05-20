import { createBrowserRouter } from "react-router-dom";
import Main from "../component/Main/Main";
import Home from "../component/Home/Home";
import Login from "../component/Login/Login";
import Register from "../component/Login/Register";
import AddToy from "../component/AddToy/AddToy";
import AllToys from "../component/AllToys/AllToys";
import ViewDetails from "../component/ViewDetails/ViewDetails";
import PrivateRoute from "./PrivateRoute";
import MyToy from "../component/MyToy/MyToy";
import UpdateToy from "../component/MyToy/UpdateToy";
import Vlog from "../component/Vlog/Vlog";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/allToys",
                element: <AllToys></AllToys>,
            },
            {
                path: "/blogs",
                element: <Vlog></Vlog>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/addToy",
                element: <PrivateRoute><AddToy></AddToy></PrivateRoute>
            },
            {
                path: "/myToy",
                element: <PrivateRoute><MyToy></MyToy></PrivateRoute>
            },
            {
                path: "/update/:id",
                element: <UpdateToy></UpdateToy>,
                loader: ({params}) => fetch(`https://our-heros-server.vercel.app/products/${params.id}`)
            },
            {
                path: "/details/:id",
                element: <PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>,
                loader: ({params}) => fetch(`https://our-heros-server.vercel.app/products/${params.id}`)
            }
        ]
    },
]);

export default router