import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../component/Loading";
import Error from "../component/Error";
import { deleteUser, getAllUser } from "../actions/UserAction";
import AdminScreen from "./AdminScreen";

const UserList = () => {
  const { users, loading, error } = useSelector(
    (state) => state.getAllUserReducer
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllUser());
  }, [dispatch]);

  return (
    <div className="row m-4 justify-content-center min-vh-100">
    <AdminScreen/>
      <div className="col-md-10 border border-info p-4 rounded">
        <h1>User list</h1>
        {loading && <Loading />}
        {error && <Error error={"Something went wrong"} />}
        <table className="table table-striped">
          <thead className="thead-dark">
            <tr>
              <th>UserID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {users &&
              users.map((user) => {
                return (
                  <tr key={user._id}>
                    <td>{user._id} </td>
                    <td>{user.name} </td>
                    <td>{user.email} </td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={() => dispatch(deleteUser(`${user._id}`))}
                      >
                        Delete
                      </button>{" "}
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

export default UserList;
