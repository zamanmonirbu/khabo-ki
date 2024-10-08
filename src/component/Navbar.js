import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logoutUser } from "../actions/UserAction";
import CartIcon from "../Image/shopping-bag.png";
import NavIcon from "../Image/navIcon.png"

const Navbar = () => {
  const { cartItems } = useSelector((state) => state.addToCartReducer);
  const { currentUser } = useSelector((state) => state.loginUserReducer);
  const dispatch = useDispatch();
  const isAdmin = currentUser?.isAdmin;

  return (
    <nav className="navbar navbar-expand-lg shadow-lg p-3 bg-light">
        <Link
        className="navbar-brand d-flex align-items-center rounded" 
        style={{ marginLeft: '1%'}}
        to="/"
      >
        <img src={NavIcon} alt="nav icon" style={{ width: '40px', height: '40px' }} className="me-2" />
        Pizza House
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <button
        className="btn btn-d"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasRight"
        aria-controls="offcanvasRight"
      >
        {/* Content for the offcanvas button */}
      </button>
      <div
        className="offcanvas offcanvas-end"
        index="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        {/* Offcanvas content */}
      </div>

      <div
        className="collapse navbar-collapse"
        id="navbarNav"
        style={{ marginLeft: "55%" }}
      >
        <div className="navbar-nav ">
          {currentUser ? (
            <div className="dropdown" style={{ marginRight: "20px" }}>
              <Link
                className="dropdown-toggle text-dark"
                type="button"
                id="dropdownMenuButton"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <button className="btn" style={{ backgroundColor: '#FA7224' }}>{currentUser.name}</button>
              </Link>
              <div
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton"
              >
                {isAdmin ? (
                  <Link className="dropdown-item" to="/admin">
                    Admin Panel
                  </Link>
                ) : null}

                <Link className="dropdown-item" to="/orders">
                  Orders
                </Link>
                <Link
                  className="dropdown-item"
                  onClick={() => dispatch(logoutUser())}
                >
                  LogOut
                </Link>
              </div>
            </div>
          ) : (
            <div className="nav-item ">
              <Link className="nav-link" to="/login">
                Login
              </Link>
            </div>
          )}

          <div className="nav-item hover:bg-success">
            <Link
              className="nav-link border border-danger rounded"
              to="/cart"
              style={{ paddingLeft: "10px", paddingRight: "10px" }}
            >
              {" "}
              <img
                src={CartIcon}
                style={{ width: "20px", color:'#fa7224' }}
                alt="cartIcon"
                
              />{" "}
              {cartItems.length}{" "}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
