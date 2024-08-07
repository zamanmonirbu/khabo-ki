import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFood } from "../actions/FoodActions";
import Loading from '../component/Loading';
import Error from '../component/Error';
import Success from '../component/Success';
import AdminScreen from "./AdminScreen";

const AddFood = () => {
  const [name, setName] = useState("");
  const [smallPrice, setSmallPrice] = useState("");
  const [mediumPrice, setMediumPrice] = useState("");
  const [largePrice, setLargePrice] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  const { success, loading, error } = useSelector(state => state.addFoodReducer);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Convert prices to numbers
    const foodData = {
      name,
      smallPrice: parseFloat(smallPrice),
      mediumPrice: parseFloat(mediumPrice),
      largePrice: parseFloat(largePrice),
      image,
      description,
      category
    };
console.log(foodData)
    dispatch(addFood(foodData));

    // Clear the form fields after submission
    // setName("");
    // setSmallPrice("");
    // setMediumPrice("");
    // setLargePrice("");
    // setImage("");
    // setDescription("");
    // setCategory("");
  };

  return (
    <div className="row m-4 justify-content-center">
      <AdminScreen/>
      <div className="col-md-10 border border-info p-4 rounded">
        <h1>Add Food</h1>
        {loading && <Loading />}
        {error && <Error error={"Something went wrong"} />}
        {success && <Success success={"Food added successfully"} />}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input
              id="name"
              className="form-control"
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="smallPrice" className="form-label">Small Variant Price</label>
            <input
              id="smallPrice"
              className="form-control"
              type="number"
              placeholder="Small variant Price"
              value={smallPrice}
              onChange={(e) => setSmallPrice(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="mediumPrice" className="form-label">Medium Variant Price</label>
            <input
              id="mediumPrice"
              className="form-control"
              type="number"
              placeholder="Medium variant Price"
              value={mediumPrice}
              onChange={(e) => setMediumPrice(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="largePrice" className="form-label">Large Variant Price</label>
            <input
              id="largePrice"
              className="form-control"
              type="number"
              placeholder="Large variant Price"
              value={largePrice}
              onChange={(e) => setLargePrice(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="image" className="form-label">Image URL</label>
            <input
              id="image"
              className="form-control"
              type="text"
              placeholder="Image URL"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="category" className="form-label">Category</label>
            <input
              id="category"
              className="form-control"
              type="text"
              placeholder="Category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">Description</label>
            <input
              id="description"
              className="form-control"
              type="text"
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <button className="btn btn-danger" type="submit">Add Food</button>
        </form>
      </div>
    </div>
  );
};

export default AddFood;
