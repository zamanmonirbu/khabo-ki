import React, { useState, useEffect } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'; 

const FoodFilter = ({ onFilterChange }) => {
  const [mainCategory, setMainCategory] = useState('');
  const [size, setSize] = useState('');
  const [priceRange, setPriceRange] = useState('');
  const [expandedSection, setExpandedSection] = useState(null); 
  
  useEffect(() => {
    onFilterChange(mainCategory, size, priceRange);
  }, [mainCategory, size, priceRange]);

  const handleMainCategoryChange = (event) => {
    setMainCategory(event.target.value);
  };

  const handleSizeChange = (event) => {
    setSize(event.target.value);
  };

  const handlePriceRangeChange = (event) => {
    setPriceRange(event.target.value);
  };

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div className="container mt-4">
      {/* Main Category */}
      <div className="mb-3">
        <button
          onClick={() => toggleSection('category')}
          className="btn btn-outline-danger w-100 d-flex justify-content-between align-items-center"
        >
          Category
          {expandedSection === 'category' ? <FaChevronUp /> : <FaChevronDown />}
        </button>
        {expandedSection === 'category' && (
          <div className="mt-2">
            <div style={{ textAlign: 'left' }}>
              <input
                type="radio"
                id="veg"
                name="mainCategory"
                value="veg"
                onChange={handleMainCategoryChange}
                checked={mainCategory === 'veg'}
              />
              <label htmlFor="veg" className="ms-2">Veg</label>
            </div>
            <div style={{ textAlign: 'left' }}>
              <input
                type="radio"
                id="nonVeg"
                name="mainCategory"
                value="non-veg"
                onChange={handleMainCategoryChange}
                checked={mainCategory === 'non-veg'}
              />
              <label htmlFor="nonVeg" className="ms-2">Non-Veg</label>
            </div>
          </div>
        )}
      </div>

      {/* Size */}
      <div className="mb-3">
        <button
          onClick={() => toggleSection('size')}
          className="btn btn-outline-danger w-100 d-flex justify-content-between align-items-center"
        >
          Size
          {expandedSection === 'size' ? <FaChevronUp /> : <FaChevronDown />}
        </button>
        {expandedSection === 'size' && (
          <div className="mt-2">
            <div style={{ textAlign: 'left' }}>
              <input
                type="radio"
                id="small"
                name="size"
                value="small"
                onChange={handleSizeChange}
                checked={size === 'small'}
              />
              <label htmlFor="small" className="ms-2">Small</label>
            </div>
            <div style={{ textAlign: 'left' }}>
              <input
                type="radio"
                id="medium"
                name="size"
                value="medium"
                onChange={handleSizeChange}
                checked={size === 'medium'}
              />
              <label htmlFor="medium" className="ms-2">Medium</label>
            </div>
            <div style={{ textAlign: 'left' }}>
              <input
                type="radio"
                id="large"
                name="size"
                value="large"
                onChange={handleSizeChange}
                checked={size === 'large'}
              />
              <label htmlFor="large" className="ms-2">Large</label>
            </div>
          </div>
        )}
      </div>

      {/* Price Range */}
      <div className="mb-3">
        <button
          onClick={() => toggleSection('priceRange')}
          className="btn btn-outline-danger w-100 d-flex justify-content-between align-items-center"
        >
          Price Range
          {expandedSection === 'priceRange' ? <FaChevronUp /> : <FaChevronDown />}
        </button>
        {expandedSection === 'priceRange' && (
          <div className="mt-2">
            <div style={{ textAlign: 'left' }}>
              <input
                type="radio"
                id="0-100"
                name="priceRange"
                value="0-100"
                onChange={handlePriceRangeChange}
                checked={priceRange === '0-100'}
              />
              <label htmlFor="0-100" className="ms-2">0-100</label>
            </div>
            <div style={{ textAlign: 'left' }}>
              <input
                type="radio"
                id="101-200"
                name="priceRange"
                value="101-200"
                onChange={handlePriceRangeChange}
                checked={priceRange === '101-200'}
              />
              <label htmlFor="101-200" className="ms-2">101-200</label>
            </div>
            <div style={{ textAlign: 'left' }}>
              <input
                type="radio"
                id="201-300"
                name="priceRange"
                value="201-300"
                onChange={handlePriceRangeChange}
                checked={priceRange === '201-300'}
              />
              <label htmlFor="201-300" className="ms-2">201-300</label>
            </div>
            <div style={{ textAlign: 'left' }}>
              <input
                type="radio"
                id="300+"
                name="priceRange"
                value="300+"
                onChange={handlePriceRangeChange}
                checked={priceRange === '300+'}
              />
              <label htmlFor="300+" className="ms-2">300+</label>
            </div>
          </div>
        )}
      </div>     
    </div>
  );
};

export default FoodFilter;
