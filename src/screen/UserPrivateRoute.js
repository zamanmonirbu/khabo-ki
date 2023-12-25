import React from 'react';
import { useSelector } from 'react-redux';
import { Outlet, useLocation,Navigate } from 'react-router-dom';

const UserPrivateRoute = () => {
    const location=useLocation();
    const {currentUser}=useSelector(state=>state.loginUserReducer)
    return (
        <div>
            {
                currentUser? <Outlet /> : <Navigate to="/login"  state={{ prevUrl: location.pathname }} />
            }
        </div>
    );
};

export default UserPrivateRoute;