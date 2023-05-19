import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const notify = () => toast("You have to log in first");
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
        </>
    );
};

export default PrivateRoute;