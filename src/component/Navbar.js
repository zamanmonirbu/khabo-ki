import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logoutUser } from '../actions/UserAction';

const Navbar = () => {
    const { cartItems } = useSelector(state => state.addToCartReducer);
    const {currentUser} = useSelector(state => state.loginUserReducer);
    const dispatch=useDispatch();
    
    return (
        <nav className="navbar navbar-expand-lg shadow-lg p-3 mb-5 bg-white rounded">
            <Link className="navbar-brand" to="/">Khabo-ki</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                   {
                    currentUser?(<div className="dropdown">
                    <Link className="dropdown-toggle mt-2 text-dark" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      {currentUser.name}
                    </Link>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">                    
                      <Link className="dropdown-item" to="/cart">Orders</Link>
                      <Link className="dropdown-item" onClick={()=>dispatch(logoutUser())}>LogOut</Link>
                    </div>
                  </div>):( <li className="nav-item ">
                    <Link className="nav-link" to="/login">Login</Link>
                </li>)
                   }
                    <li className="nav-item">
                        <Link className="nav-link" to="/cart">Cart {cartItems.length} </Link>
                    </li>
                </ul>

            </div>
        </nav>

    );
};

export default Navbar;