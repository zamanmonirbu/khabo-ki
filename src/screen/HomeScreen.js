import React, { useEffect } from 'react';
import Foods from '../component/Foods.js';
import { useDispatch, useSelector } from 'react-redux';
import { getAllFood } from '../actions/FoodActions.js';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const {food,loading,error} = useSelector((state) => state.foodReducer);

  useEffect(() => {
    dispatch(getAllFood());
  }, [dispatch]);

  return (
    <div className='row justify-content-center'>
      {
        loading?(<h1>Loading...</h1>):error?("Something went wrong!!!"):(
            food.map((food) => (
            <div className='col-md-3 m-3' key={food._id}>
              <Foods food={food}  />
            </div>
          )))
      }
    </div>
  );
};

export default HomeScreen;
