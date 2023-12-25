import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../actions/UserAction";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Loading from "../component/Loading";
import Error from "../component/Error";

const LoginScreen = () => {
  const location = useLocation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const Navigate = useNavigate();
  const { error, loading } = useSelector((state) => state.loginUserReducer);
  const { currentUser } = useSelector((state) => state.loginUserReducer);

  const dispatch = useDispatch();
  const login = (e) => {
    e.preventDefault();
    const user = {
      email,
      password,
    };

    dispatch(loginUser(user));
  };

  useEffect(() => {
    if (currentUser) {
      if (location?.state?.prevUrl) {
        Navigate(location?.state?.prevUrl);
      } else {
        Navigate("/");
      }
    }
  }, [Navigate, location?.state?.prevUrl, currentUser]);

  return (
    <div className="row justify-content-center mt-5">
      <div className="col-md-5 mt-5 text-left shadow-lg p-3 mb-5 bg-body rounded">
        {loading && <Loading />}
        {error && <Error error={"Wrong user credential"} />}
        <h2 className="text-center">Login</h2>
        <form>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="form-control"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="form-control"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />
          <div className="d-flex justify-content-between align-items-center mt-3">
            <button className="btn btn-danger" type="submit" onClick={login}>
              LOGIN
            </button>
            <Link to={"/register"}>Click here to register</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginScreen;
