import React, { useState, useEffect } from 'react';
import display1 from '../Image/d1.png';
import display2 from '../Image/d2.jpg';
import display3 from '../Image/d3.jpg';
import display4 from '../Image/d4.png';
import Products from '../component/Products';
import FoodFilter from './FoodFilter';
import axios from 'axios'; 
import { BACKEND_URL } from '../actions/Constant';

const HomeScreen = () => {
  const [filteredFoods, setFilteredFoods] = useState([]);
  const fetchAllProducts = async () => {
    try {
      const res = await axios.get(`${BACKEND_URL}/api/food/getFoods`);
      setFilteredFoods(res.data);
    } catch (error) {
      console.error("Error fetching all food data:", error);
    }
  };

  useEffect(() => {
    fetchAllProducts();
  }, []);

  const handleFilterChange = async (category, size, priceRange) => {
    try {
      const response = await axios.get(`${BACKEND_URL}/api/food/filter`, {
        params: { category, size, priceRange }
      });
      setFilteredFoods(response.data);
    } catch (error) {
      console.error('Error fetching filtered foods:', error);
    }
  };

  return (
    <div className="container-fluid">
      <div className="row">
        {/* Filter Part */}
        <div className="col-md-2">
          <FoodFilter onFilterChange={handleFilterChange} />
        </div>

        {/* Carousel Part */}
        <div className="col-md-10">
          <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={display1} className="d-block w-100" alt="display" style={{ height: '300px', objectFit: 'cover' }} />
              </div>
              <div className="carousel-item">
                <img src={display2} className="d-block w-100" alt="..." style={{ height: '300px', objectFit: 'cover' }} />
              </div>
              <div className="carousel-item">
                <img src={display3} className="d-block w-100" alt="..." style={{ height: '300px', objectFit: 'cover' }} />
              </div>
              <div className="carousel-item">
                <img src={display4} className="d-block w-100" alt="..." style={{ height: '300px', objectFit: 'cover' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* View all products or filtered products */}
      <Products foods={filteredFoods} />
    </div>
  );
};

export default HomeScreen;
