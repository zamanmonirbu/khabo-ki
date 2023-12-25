import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { editFood, getFoodById } from "../actions/FoodActions";
import Loading from "../component/Loading";
import Error from "../component/Error";

const EditFood = () => {
  const { currentUser } = useSelector((state) => state.loginUserReducer);
  useEffect(() => {
    if (!currentUser?.isAdmin) {
      window.location.href = "/";
    }
  }, [currentUser?.isAdmin]);
  
  const { id } = useParams();
  const dispatch = useDispatch();
  const { error, food, loading } = useSelector((state) => state.getFoodByIdReducer);

  const [name, setName] = useState("");
  const [smallPrice, setSmallPrice] = useState("");
  const [mediumPrice, setMediumPrice] = useState("");
  const [largePrice, setLargePrice] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");


  console.log(name,
    image,
    description,
    category)

  const handleSubmit = (e) => {
    e.preventDefault();
    const EditFoodData = {
      id: food._id,
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
    console.log("From Edit", EditFoodData);
    dispatch(editFood(EditFoodData));
  };

  useEffect(() => {
    if (!food || food._id !== id) {
      dispatch(getFoodById(id));
    } else {
      setName(food.name);
      setImage(food.image);
      setCategory(food.category);
      setDescription(food.description);
      setSmallPrice(food.prices[0].small);
      setMediumPrice(food.prices[0].medium);
      setLargePrice(food.prices[0].large);
    }
  }, [food, id, dispatch]);

  return (
    <div>
      <p>Id: {id}</p>
      {loading && <Loading />}
      {error && <Error error={"Something went wrong"} />}
      {food && (
        <div>
          <h1>Edit Food</h1>
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
            <button className="btn btn-danger" type="submit">Update Food</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default EditFood;
