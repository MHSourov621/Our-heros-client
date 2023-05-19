import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const notify = () => toast("New Toy Added successfully");
    const location = useLocation();

    if (loading) {
        return <progress className="progress w-56 progress-warning ml-[600px]"></progress>
    }

    if (user?.email) {
        return children
    }
    return (
        <>
            {notify()}
            <Navigate to="/login" state={{from: location}} replace></Navigate>
            <ToastContainer />
        </>
    );
};

export default PrivateRoute;