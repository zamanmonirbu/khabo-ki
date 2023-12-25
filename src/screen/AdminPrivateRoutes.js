import React from 'react';
import { useSelector } from 'react-redux';
import { Outlet, useLocation, Navigate } from 'react-router-dom';

const AdminPrivateRoutes = () => {
    const location=useLocation();
    const {currentUser}=useSelector(state=>state.loginUserReducer)
    const admin=currentUser?.isAdmin;
    return (
        <div>
            {
                admin? <Outlet /> : <Navigate to="/no/permission"  state={{ prevUrl: location.pathname }} />
            }
        </div>
    );
};

export default AdminPrivateRoutes;