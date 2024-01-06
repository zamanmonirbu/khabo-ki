import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Foods from '../component/Foods.js';
import { getAllFood } from '../actions/FoodActions.js';
import Loading from '../component/Loading.js';
import Error from '../component/Error.js';
import { BACKEND_URL } from '../actions/Constant.js';
import axios from 'axios';

const HomeScreen = () => {
  const dispatch = useDispatch();
  // const { food, loading, error } = useSelector((state) => state.foodReducer);
const [food,setFood]=useState()
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${BACKEND_URL}/api/food/getFoods`);
        setFood(res.data);
      } catch (error) {
        // Handle any errors if needed
        console.error("Error fetching food data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='row justify-content-center ' style={{backgroundColor:'#F5F5F5'}}>
      {
        // loading ? <Loading /> : error ? <Error error={"Some thing went wrong"} /> : (
          food?.map((food) => (
            <div className='col-md-3 m-3' key={food._id}>
              <Foods food={food} />
            </div>
          ))
      }
    </div>
  );
};

export default HomeScreen;
