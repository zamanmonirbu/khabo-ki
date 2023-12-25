import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../actions/UserAction';
import { Link } from 'react-router-dom';
import Loading from '../component/Loading';
import Error from '../component/Error';
import Success from '../component/Success';

const RegisterScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const { success, loading, error } = useSelector(state => state.registerUserReducer)
  const dispatch = useDispatch();

  const register = (e) => {
    e.preventDefault();
    if (password !== confirm) {
      alert("Passwords do not match");
    } else {
      const user = {
        name, email, password
      };
      console.log(user);
      dispatch(registerUser(user));
    }
  };

  return (
    <div className="row justify-content-center mt-5">
      <div className="col-md-5 mt-5 text-left shadow-lg p-3 mb-5 bg-body rounded">
        {loading && <Loading />}
        {error && <Error error={"Already used Email"} />}
        {success && <Success success={"Registration successfully"} />}
        <h2 className='text-center'>Register</h2>
        <form>
          <input type="text" name="name" placeholder='Name' className='form-control' onChange={(e) => setName(e.target.value)} value={name} required />
          <input type="email" name="email" placeholder='Email' className='form-control' onChange={(e) => setEmail(e.target.value)} value={email} required />
          <input type="password" name="password" placeholder='Password' className='form-control' onChange={(e) => setPassword(e.target.value)} value={password} required />
          <input type="password" name="confirm" placeholder='Confirm password' className='form-control' onChange={(e) => setConfirm(e.target.value)} value={confirm} required />
          <div className="d-flex justify-content-between align-items-center mt-3">
            <button className="btn btn-danger" type="submit" onClick={register}>REGISTER</button>
            <Link to={'/login'}>Click here to Login</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterScreen;
