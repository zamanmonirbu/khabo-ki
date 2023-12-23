import React, { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { addFood } from "../actions/FoodActions";
import Loading from '../component/Loading';
import Error from '../component/Error';
import Success from '../component/Success';


const AddFood = () => {
  const [name, setName] = useState("");
  const [smallPrice, setSmallPrice] = useState("");
  const [mediumPrice, setMediumPrice] = useState("");
  const [largePrice, setLargePrice] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");


  const {success,loading,error}=useSelector(state=>state.addFoodReducer)
  const dispatch=useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const food = {
      name,
      image,
      description,
      category,
      prices: {
        small: smallPrice,
        medium: mediumPrice,
        large: largePrice,
      },
    };
console.log({food})
dispatch(addFood())

  };

  return (
    <div>
      <div>
        <h1>Add Food</h1>
        {loading && <Loading/>}
        {error && <Error error={"Something went wrong"}/>}
        {success && <Success success={"Food added successfully"}/>}
        <form onSubmit={handleSubmit}>
          <input
            className="form-control"
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="form-control"
            type="text"
            placeholder="Small variant Price"
            value={smallPrice}
            onChange={(e) => setSmallPrice(e.target.value)}
          />
          <input
            className="form-control"
            type="text"
            placeholder="Medium variant Price"
            value={mediumPrice}
            onChange={(e) => setMediumPrice(e.target.value)}
          />
          <input
            className="form-control"
            type="text"
            placeholder="Large variant Price"
            value={largePrice}
            onChange={(e) => setLargePrice(e.target.value)}
          />
          <input
            className="form-control"
            type="text"
            placeholder="Image"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
          <input
            className="form-control"
            type="text"
            placeholder="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
          <input
            className="form-control"
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <button type="submit">Add Food</button>
        </form>
      </div>
    </div>
  );
};

export default AddFood;
