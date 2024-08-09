import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMostOrderedFoods } from '../actions/MostFavoriteActions';
import FavFood from './FavFood.js';

const MostFavorite = () => {
  const dispatch = useDispatch();
  const { mostOrderedFoods, loading, error } = useSelector(state => state.mostFavoriteReducer);

  useEffect(() => {
    dispatch(getMostOrderedFoods());
  }, [dispatch]);

  return (
    <div className='container-fluid mt-5 bg-light '>
      <h4 className='text-center mb-4' style={{ color: '#FA7224' }}>Most Favorite Pizza Items..</h4>
      {loading ? (
        <div className='text-center'>Loading...</div>
      ) : error ? (
        <div className='text-center text-danger'>{error}</div>
      ) : (
        <div className='row justify-content-center'>
          {mostOrderedFoods.length > 0 ? (
            mostOrderedFoods.map((item) => (
              <div className='col-md-3 col-sm-6 mb-4' key={item._id}>
                <FavFood food={item.foodDetails} ordered={item.count} />
              </div>
            ))
          ) : (
            <p className='text-center'>No most ordered foods found.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default MostFavorite;
