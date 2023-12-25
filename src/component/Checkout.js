import React from "react";
import { useDispatch, useSelector } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import { placeOrder } from "../actions/OrderAction";
import Loading from "../component/Loading";
import Error from "../component/Error";
import Success from "../component/Success";
import { Link } from "react-router-dom";

const Checkout = ({ subTotal }) => {
  const { loading, error, success } = useSelector(
    (state) => state.placeOrderReducer
  );
  const {currentUser}=useSelector(state=>state.loginUserReducer)
  const dispatch = useDispatch();
  const handleToken = (token) => {
    console.log(token);
    dispatch(placeOrder(token, subTotal));
  };
  return (
    <div>
      {loading && <Loading />}
      {error && <Error error={"Payment not success"} />}
      {success && <Success success={"Successful payment"} />}
      {
        currentUser?(<StripeCheckout
        amount={subTotal * 100}
        stripeKey="pk_test_51OQBiWIHoIMM5DdUn2CP9cXfVmKs8Ga09vvkLPNhUpF3nm2lbkeqCLMsLS2Ya7pAUkWD3fF0n8m3sXDb7F76uHaO00OhnrgO83"
        shippingAddress
        token={handleToken}
        currency="INR"
      >
        <button className="btn btn-danger">Pay Now</button>
      </StripeCheckout>):(<Link to="/login"> <button className="btn btn-danger">To pay Login First</button></Link>)
      }
    </div>
  );
};

export default Checkout;
