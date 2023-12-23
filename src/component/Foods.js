import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addToCart } from '../actions/CartAction';

const Foods = ({ food }) => {
  const [quantity, setQuantity] = useState(1);
  const [variant, setVariant] = useState('small');
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch=useDispatch();
  // const state=useSelector(state=>state.addToCartReducer)
  const handleAddToCart=()=>{
    dispatch(addToCart(food,quantity,variant))
  }

  return (
    <div className='shadow-lg p-3 mb-5 bg-white rounded'>
      <div onClick={handleShow}>
        <p>{food.name}</p>
        <img src={food.image} alt="foodImg" className='img-fluid' style={{ height: '200px', width: '200px' }} />
      </div>
      <div className="fluid-container">
        <div className='w-100 m-1'>
          Variants
          <select className='form-control' value={variant} onChange={(e) => setVariant(e.target.value)}>
            {food.variants.map((variant) => (
              <option key={variant} value={variant}>
                {variant}
              </option>
            ))}
          </select>
        </div>
        <div className='w-100 m-1'>
          Quantity
          <select className='form-control' value={quantity} onChange={(e) => setQuantity(e.target.value)}>
            {[...Array(10).keys()].map((i) => (
              <option key={i + 1} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="fluid-container">
        <div className="m-1 w-100">
        <p className='mt-1'>Prices: {food.prices[0][variant] * quantity} tk</p>
        </div>
        <div className="m-1 w-100">
          <button onClick={handleAddToCart}>Add to cart</button>
        </div>
      </div>

      <Modal show={show}>
        <Modal.Header onClick={handleClose} closeButton>
          <Modal.Title>{food.name}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div>
            <img src={food.image} alt="foodImg" className='img-fluid' style={{ height: '400px', width: '400px' }} />
            <p>{food.description}</p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button onClick={handleClose}>Close</button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Foods;
