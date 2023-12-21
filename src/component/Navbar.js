import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Navbar = () => {
    const dispatch=useDispatch();
    const {cartItems}=useSelector(state=>state.addToCartReducer)
    return (

        <nav className="navbar navbar-expand-lg shadow-lg p-3 mb-5 bg-white rounded">
            <a className="navbar-brand" href="sd">Khabo-ki</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item ">
                        <a className="nav-link" href="j">Login</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="k">Cart {cartItems.length} </a>
                    </li>
                </ul>

            </div>
        </nav>

    );
};

export default Navbar;