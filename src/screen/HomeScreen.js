import display1 from '../Image/d1.png';
import display2 from '../Image/d2.jpg';
import display3 from '../Image/d3.jpg';
import display4 from '../Image/d4.png';
import Products from '../component/Products';
import FoodFilter from './FoodFilter';
import { useDispatch, useSelector } from 'react-redux';
import { filterFood } from '../actions/FoodActions';
import MostFavorite from '../component/MostFavorite';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const {food} = useSelector((state) => state.filterReducer);

  const handleFilterChange = async (category, size, priceRange) => {
    dispatch(filterFood(category, size, priceRange));
  };

  // console.log(food)

  return (
    <div className="container-fluid min-vh-100">
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
      <MostFavorite/>
      <Products foods={food ||[]} />
    </div>
  );
};

export default HomeScreen;
