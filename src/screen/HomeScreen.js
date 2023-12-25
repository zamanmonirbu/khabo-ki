import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Foods from '../component/Foods.js';
import { getAllFood } from '../actions/FoodActions.js';
import Loading from '../component/Loading.js';
import Error from '../component/Error.js';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const { food, loading, error } = useSelector((state) => state.foodReducer);

  useEffect(() => {
    dispatch(getAllFood());
  }, [dispatch]);

  return (
    <div className='row justify-content-center ' style={{backgroundColor:'#F5F5F5'}}>
      {
        loading ? <Loading /> : error ? <Error error={"Some thing went wrong"} /> : (
          food.map((food) => (
            <div className='col-md-3 m-3' key={food._id}>
              <Foods food={food} />
            </div>
          )))
      }
    </div>
  );
};

export default HomeScreen;
