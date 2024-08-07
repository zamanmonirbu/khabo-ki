import { BACKEND_URL } from '../actions/Constant.js';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Foods from '../component/Foods.js';

const Products = ({ foods }) => {
  const [allFoods, setAllFoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // console.log("Fetching data from:", `${BACKEND_URL}/api/food/getFoods`);
        const res = await axios.get(`${BACKEND_URL}/api/food/getFoods`);
        // console.log("Fetched data:", res.data);
        setAllFoods(res.data);
      } catch (error) {
        setError("Error fetching food data");
        console.error("Error fetching food data:", error);
      } finally {
        setLoading(false);
      }
    };

    // Only fetch data if foods prop is not provided or is empty
    if (!foods || foods.length === 0) {
      fetchData();
    } else {
      setAllFoods(foods);
      setLoading(false); // If foods are passed in, loading is done
    }
  }, [foods]);

  let displayFoods = foods && foods.length > 0 ? foods : allFoods;

  return (
    <div className='container-fluid mt-5'>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>{error}</div>
      ) : (
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
      )}
    </div>
  );
};

export default Products;
