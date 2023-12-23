import React from 'react';
import { useDispatch } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';
import { placeOrder } from '../actions/OrderAction';

const Checkout = ({ subTotal }) => {
    const dispatch=useDispatch();
    const handleToken = (token) => {
        console.log(token);
        dispatch(placeOrder(token,subTotal))
    }
    return (
        <StripeCheckout
            amount={subTotal * 100}
            stripeKey="pk_test_51OQBiWIHoIMM5DdUn2CP9cXfVmKs8Ga09vvkLPNhUpF3nm2lbkeqCLMsLS2Ya7pAUkWD3fF0n8m3sXDb7F76uHaO00OhnrgO83"
            shippingAddress
            token={handleToken}
            currency='INR'
        >
            <button>Pay Now</button>
        </StripeCheckout>
    );
};

export default Checkout;