import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserOrders } from "../actions/OrderAction";
import Loading from "../component/Loading";
import Error from "../component/Error";

const OrderScreen = () => {
  const dispatch = useDispatch();
  const { orders, loading, error } = useSelector(
    (state) => state.getUserOrdersReducers
  );
  useEffect(() => {
    dispatch(getUserOrders());
  }, [dispatch]);
  return (
    <div>
      <h2>My Orders</h2>
      <div className="row justify-content-center">
        {loading && <Loading />}
        {error && <Error error={"Something went wrong"} />}
        {orders &&
          orders.map((order) => {
            return (
              <div className="col-md-8 ">
                <div className="fluid-container mt-2 p-4 bg-secondary text-white shadow  mb-3  rounded">
                  <div className="text-start w-100 ">
                    <h2>Items</h2>
                    {order.orderItems.map((item) => {
                      return (
                        <div>
                          <p>
                            {item.variant} [{item.variant}]*{item.quantity}=
                            {item.price}
                          </p>
                        </div>
                      );
                    })}
                  </div>

                  <div className="text-start w-100 ">
                    <h2>Address</h2>
                    <p>Street : {order.shippingAddress.street}</p>
                    <p>City : {order.shippingAddress.city}</p>
                    <p>Country : {order.shippingAddress.country}</p>
                    <p>PinCode : {order.shippingAddress.pincode}</p>
                  </div>
                  <div className="text-start w-100 m-1">
                    <h2>OrderInfo</h2>
                    <p>Order Amount : {order.orderAmount}</p>
                    <p>Order Date : {order.orderAmount}</p>
                    <p>Date : {order.createdAt.substring(0, 10)}</p>
                    <p>Transaction ID : {order.transactionId}</p>
                    <p>Order ID : {order._id}</p>

                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default OrderScreen;
