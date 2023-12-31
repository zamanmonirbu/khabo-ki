import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logoutUser } from "../actions/UserAction";
import CartIcon from "../Image/shopping-bag.png";

const Navbar = () => {
  const { cartItems } = useSelector((state) => state.addToCartReducer);
  const { currentUser } = useSelector((state) => state.loginUserReducer);
  const dispatch = useDispatch();
  const isAdmin = currentUser?.isAdmin;

  return (
    <nav className="navbar navbar-expand-lg shadow-lg p-3 mb-5 bg-white rounded">
      <Link
        className="navbar-brand border border-info rounded"
        style={{ marginLeft: "10%", paddingLeft: "10px", paddingRight: "10px" }}
        to="/"
      >
        Khabo-ki
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
        <span className="navbar-toggler-icon">
          <button
            class="btn btn-d"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasRight"
            aria-controls="offcanvasRight"
          >
          
          </button>

          <div
            class="offcanvas offcanvas-end"
            tabindex="-1"
            id="offcanvasRight"
            aria-labelledby="offcanvasRightLabel"
          >
            <div class="offcanvas-header">
              <h5 id="offcanvasRightLabel">Welcome to Ki-Khabo</h5>
              <button
                type="button"
                class="btn-close text-reset"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div class="offcanvas-body">
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
                <button className="btn btn-info">{currentUser.name}</button>
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

          <div style={{width:'40%',marginLeft:'25%',marginTop:'100px'}}>
          <Link
              className="nav-link border border-info rounded"
              to="/cart"
              style={{ paddingLeft: "10px", paddingRight: "10px" }}
            >
              {" "}
              <img
                src={CartIcon}
                style={{ width: "20px" }}
                alt="cartIcon"
              />{" "}
              {cartItems.length}{" "}
            </Link>
          </div>

            </div>
          </div>
        </span>
      </button>
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
                <button className="btn btn-info">{currentUser.name}</button>
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
          <div className="nav-item hover:bg-secondary">
            <Link
              className="nav-link border border-info rounded"
              to="/cart"
              style={{ paddingLeft: "10px", paddingRight: "10px" }}
            >
              {" "}
              <img
                src={CartIcon}
                style={{ width: "20px" }}
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
