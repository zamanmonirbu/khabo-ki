import { BACKEND_URL } from '../actions/Constant.js';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Foods from '../component/Foods.js';

const Products = ({ foods }) => {
  const [allFoods, setAllFoods] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${BACKEND_URL}/api/food/getFoods`);
        setAllFoods(res.data);
      } catch (error) {
        console.error("Error fetching food data:", error);
      }
    };

    if (!foods) {
      fetchData();
    }
  }, [foods]);

  const displayFoods = foods || allFoods;

  return (
    <div className='container-fluid mt-5'>
      <div className='row justify-content-center'>
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
    </div>
  );
};

export default Products;
