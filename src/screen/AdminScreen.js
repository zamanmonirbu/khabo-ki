import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const AdminScreen = () => {
  const { currentUser } = useSelector((state) => state.loginUserReducer);
  useEffect(() => {
    if (!currentUser?.isAdmin) {
      window.location.href = "/";
    }
  }, [currentUser?.isAdmin]);

  return (
    <div className="row ml-5 mr-5 justify-content-center">
      <div className="col-md-10">
        <h1>Admin Panel</h1>
        <div className="header">
          <ul className="horizontal-menu ">
            <li>
              <Link to="/admin/user/list">Users List</Link>
            </li>
            <li>
              <Link to="/admin/food/list">Food List</Link>
            </li>
            <li>
              <Link to="/admin/add/new/food">Add New Food</Link>
            </li>
            <li>
              <Link to="/admin/orders/list">Orders List</Link>
            </li>
          </ul>
          
        </div>
      </div>
    </div>
  );
};

export default AdminScreen;
