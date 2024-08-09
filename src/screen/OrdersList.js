import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../component/Loading';
import Error from '../component/Error';
import { deliveredOrder, getAllOrders } from '../actions/OrderAction';
import AdminScreen from './AdminScreen';

const OrdersList = () => {
  const { orders, loading, error } = useSelector(state => state.getAllOrdersReducers)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllOrders())
  }, [dispatch])
  return (
    <div className="row m-4 justify-content-center min-vh-100">
    <AdminScreen/>
      <div className="col-md-10 border border-info p-4 rounded">
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
    </div>
  );
};

export default OrdersList;