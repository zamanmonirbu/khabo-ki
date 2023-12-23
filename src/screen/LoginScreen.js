import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../actions/UserAction';
import { Link } from 'react-router-dom';
import Loading from '../component/Loading';
import Error from '../component/Error';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {error,loading}=useSelector(state=>state.loginUserReducer)

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
    const checkUser = localStorage.getItem('currentUser');
    if (checkUser) {
      window.location.href = '/';
    }
  }, []);

  return (
    <div className="row justify-content-center mt-5">
      <div className="col-md-5 mt-5 text-left shadow-lg p-3 mb-5 bg-body rounded">
        {loading && <Loading/>}
        {error && <Error error={"Wrong user credential"}/>}
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
            <button type="submit" onClick={login}>
              LOGIN
            </button>
            <Link to={'/register'}>Click here to register</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginScreen;
