import { Outlet } from "react-router-dom";
import { ToastContainer } from 'react-toastify';


const AuthLayout = () => {
    return (
        <div className="flex min-h-screen items-center justify-center  lg:px-2">
              <ToastContainer />
             <Outlet />
        </div>
    );
};

export default AuthLayout;