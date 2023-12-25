import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, deleteFromCart } from '../actions/CartAction';
import Checkout from '../component/Checkout';

const Cart = () => {
    const dispatch = useDispatch();
    const cartState = useSelector(state => state.addToCartReducer);
    const cartItems = cartState.cartItems;
    let subTotal = cartItems.reduce((x, item) => x + item.price, 0)
    return (
        <div className="row justify-content-center">
            <div className="col-md-6 ">
                <h2 className='mb-4'>My Cart Items {cartItems.length}</h2>
                {
                    cartItems.map((item) => {
                        return <div className="fluid-container mb-2 p-4 rounded" key={item._id} style={{backgroundColor:'#F5F5F5'}}>
                            <div className='text-start m-2 w-100'>
                                <p>Name: {item.name} [{item.variant}]</p>
                                <p>Price: {item.quantity}*{item.prices[0][item.variant]}={item.price}</p>
                                <p style={{ display: "inline" }}>Quantity: </p>
                                <i className="fa-solid fa-plus" onClick={() => { dispatch(addToCart(item, item.quantity + 1, item.variant)) }}></i>
                                {
                                    item.quantity
                                }
                                <i className="fa-solid fa-minus" onClick={() => { dispatch(addToCart(item, item.quantity - 1, item.variant)) }}></i>
                            </div>

                            <div className='m-2 w-100'>
                                <img src={item.image} alt="img" style={{ height: "80px", width: "80px" }} className='rounded'/>
                            </div>
                            <div className='m-2 w-100'>
                                <i className="fa-solid fa-trash mt-5" onClick={() => { dispatch(deleteFromCart(item)) }}></i>
                                

                            </div>
                            <hr />
                        </div>

                    })
                }
            </div>

            <div className="col-md-4 text-end">
                <h1>SubTotal: {subTotal}/-</h1>
                <Checkout subTotal={subTotal} />
            </div>

        </div>
    );
};

export default Cart;