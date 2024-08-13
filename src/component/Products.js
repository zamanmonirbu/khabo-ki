import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Foods from '../component/Foods.js';
import Loading from './Loading.js';
import { getAllFood } from '../actions/FoodActions.js';

const Products = ({ foods }) => {
  const dispatch = useDispatch();
  const { food, loading, error } = useSelector(state => state.allFoodReducer); 

  useEffect(() => {
    if (!foods || foods.length === 0) {
      dispatch(getAllFood()); 
    }
  }, [foods, dispatch]);

  let displayFoods = foods && foods.length > 0 ? foods : food;

  return (
    <div className='container-fluid mt-2'>
      {loading ? (
        <Loading />
      ) : error ? (
        <div>{error}</div>
      ) : (
        <div className='row justify-content-center'>
          <h4 className='text-center mb-4' style={{ color: '#FA7224' }}>Latest pizza items..</h4>
          {displayFoods.length > 0 ? (
            displayFoods.map((item) => (
              <div className='col-md-3 col-sm-6' key={item._id}>
                <Foods food={item} />
              </div>
            ))
          ) : (
            <p>No products found.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Products;
