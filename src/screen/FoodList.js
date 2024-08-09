import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../component/Loading.js";
import Error from "../component/Error.js";
import Success from "../component/Success.js";
import { deleteFood, getAllFood } from "../actions/FoodActions.js";
import { Link } from "react-router-dom";
import AdminScreen from "./AdminScreen.js";


const FoodList = () => {
  const dispatch = useDispatch();
  const { food, loading, error } = useSelector((state) => state.allFoodReducer);
  const { deleteLoading, deleteError, deleteSuccess } = useSelector((state) => state.deleteFoodReducer)

  useEffect(() => {
    dispatch(getAllFood());
  }, [dispatch]);

  // console.log("All food",food);

  return (
    <div className="row m-4 justify-content-center min-vh-100">
    <AdminScreen/>
      <div className="col-md-10 border border-info p-4 rounded">
      <h1>Food list</h1>
      {error && <Error error={"Something went wrong"} />}
      {loading && <Loading />}
      {deleteError && <Error error={"Something went wrong"} />}
      {deleteLoading && <Loading />}
      {deleteSuccess && <Success success={"Successfully deleted food"} />}

      <table className="table table-striped">
        <thead className="thead-dark">
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Category</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {food &&
            food.map((foods) => {
              return (
                <tr key={foods._id}>
                  <td>{foods.name} </td>
                  <td>
                    Small : {foods.prices[0]['small']} <br />
                    Medium : {foods.prices[0]['medium']}<br />
                    Large : {foods.prices[0]['large']}
                  </td>
                  <td>
                    {foods.category}
                  </td>
                  <td>
                    <Link to={`/admin/edit/food/${foods._id}`}><span className="m-1">edit <i className="fa fa-edit"></i> </span></Link>
                    <span onClick={() => dispatch(deleteFood(`${foods._id}`))}>Delete<i className="fa fa-trash"></i> </span>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default FoodList;
