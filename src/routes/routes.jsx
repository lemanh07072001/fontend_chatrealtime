import { createBrowserRouter } from "react-router-dom";
import AuthLayout from "../Layouts/AuthLayout";
import Login from '../page/Login';
import Register from '../page/Register';
import LayoutMater from "../Layouts/LayoutMater";
import Main from "../page/Main";

let router = createBrowserRouter([
    {
       
        element: <AuthLayout />,
        children: [
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/register",
                element: <Register />,
            },
        ],
    },
    {
       
        element: <LayoutMater />,
        children: [
            {
                path: "/",
                element: <Main />,
            },
           
        ],
    },
    {
        path: '*',
        element: <div>404 Not Found</div>
    },

]);

export default router;