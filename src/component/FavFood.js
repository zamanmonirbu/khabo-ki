import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addToCart } from '../actions/CartAction';
import { SiFoodpanda } from "react-icons/si";

const FavFood = ({ food, ordered }) => {
  const [quantity, setQuantity] = useState(1);
  const [variant, setVariant] = useState('small');
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(addToCart(food, quantity, variant));
  };

  return (
    <div className='shadow-lg mb-4 bg-white rounded d-flex flex-column align-items-center'>
      <div onClick={handleShow} className='text-center cursor-pointer'>
        <img src={food.image} alt="foodImg" className='img-fluid img-thumbnail mb-2' style={{ height: '150px', width: '150px', borderRadius: '50%' }} />
        <p>{food.name}</p>
        <p><SiFoodpanda style={{ color: '#FA7224' }} /> Ordered {ordered} times</p>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{food.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={food.image} alt="foodImg" className='img-fluid mb-3' style={{ height: '300px', width: '100%' }} />
          <p>{food.description}</p>
        </Modal.Body>
        <Modal.Footer>
          <div className='w-100 mt-3 mb-3'>
            Variants
            <select className='form-control' value={variant} onChange={(e) => setVariant(e.target.value)}>
              {food.variants.map((variant) => (
                <option key={variant} value={variant}>
                  {variant}
                </option>
              ))}
            </select>
          </div>
          <div className='w-100 mt-3 mb-3'>
            Quantity
            <select className='form-control' value={quantity} onChange={(e) => setQuantity(e.target.value)}>
              {[...Array(10).keys()].map((i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>
          </div>

          <div className="d-flex justify-content-between align-items-center mt-3 w-100">
            <p className='mb-0'>Prices: {food.prices[0][variant] * quantity} tk</p>
            <button className="btn" style={{ backgroundColor:"#FA7224" }} onClick={handleAddToCart}>Add to cart</button>
          </div>

          <button className="btn btn-danger mt-3" onClick={handleClose}>Close</button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default FavFood;
