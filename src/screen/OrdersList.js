import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../component/Loading';
import Error from '../component/Error';
import { deliveredOrder, getAllOrders } from '../actions/OrderAction';


const OrdersList = () => {

  const { currentUser } = useSelector((state) => state.loginUserReducer);
  useEffect(() => {
    if (!currentUser?.isAdmin) {
      window.location.href = "/";
    }
  }, [currentUser?.isAdmin]);

  const { orders, loading, error } = useSelector(state => state.getAllOrdersReducers)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllOrders())
  }, [dispatch])
  return (
    <div>
      <h1>Order list</h1>
      {loading && <Loading />}
      {error && <Error error={"Something went wrong"} />}
      <table className="table table-striped">
        <thead className="thead-dark">
          <tr>
            <th>OrderID</th>
            <th>Email</th>
            <th>UserID</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders &&
            orders.map((order) => {
              return (
                <tr key={order._id}>
                  <td>{order._id} </td>
                  <td>{order.email} </td>
                  <td>{order.userid} </td>
                  <td>{order.orderAmount} </td>
                  <td>{order.createdAt.substring(0, 10)} </td>
                  <td>{order.isDelivered ? (<button className='btn bg-success'>Complete</button>) : (<button className='btn btn-danger' onClick={() => dispatch(deliveredOrder(`${order._id}`))}>Pending</button>)} </td>

                </tr>
              );
            })}
        </tbody>
      </table>

    </div>
  );
};

export default OrdersList;