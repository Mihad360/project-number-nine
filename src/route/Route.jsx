import {createBrowserRouter} from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../home/Home";
import Detail from "../pages/Detail";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Privateroute from "./Privateroute";
import Error from "../error/Error";
import Event from "../event/Event";
import About from "../about/About";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout></Layout>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/details.json')
            },
            {
                path: '/detail/:id',
                element: <Privateroute><Detail></Detail></Privateroute>,
                loader: () => fetch('/details.json')
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/event',
                element: <Event></Event>
            },
            {
                path: '/about',
                element: <About></About>
            }
        ]
    }
])

export default router;