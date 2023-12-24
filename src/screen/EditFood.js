import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { editFood, getFoodById } from '../actions/FoodActions';
import Loading from '../component/Loading';
import Error from '../component/Error';
// import Success from '../component/Success';


const EditFood = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { error, food, loading } = useSelector(state => state.getFoodByIdReducer)
    const [name, setName] = useState("");
    const [smallPrice, setSmallPrice] = useState("");
    const [mediumPrice, setMediumPrice] = useState("");
    const [largePrice, setLargePrice] = useState("");
    const [image, setImage] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const EditFoodData = {
            id:food._id,
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
        console.log({ EditFoodData })
        dispatch(editFood(EditFoodData))

    };

    useEffect(() => {
        dispatch(getFoodById(id))
    }, [id, dispatch])
    return (
        <div>
            <p>Id: {id}</p>
            {loading && <Loading />}
            {error && <Error error={"Some thing went wrong"} />}
            {food && (<p>{food.name}</p>)}

            <div>

                <h1>Edit Food</h1>
                {/* {loading && <Loading />}
                {error && <Error error={"Something went wrong"} />} */}
                {/* {success && <Success success={"Food added successfully"}/>} */}
                {
                    food ?

                        (<form onSubmit={handleSubmit}>
                            <input
                                className="form-control"
                                type="text"
                                placeholder="Name"
                                value={food.name}
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
                                value={food.image}
                                onChange={(e) => setImage(e.target.value)}
                            />
                            <input
                                className="form-control"
                                type="text"
                                placeholder="Category"
                                value={food.category}
                                onChange={(e) => setCategory(e.target.value)}
                            />
                            <input
                                className="form-control"
                                type="text"
                                placeholder="Description"
                                value={food.description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                            <button type="submit">Add Food</button>
                        </form>) : null
                }
            </div>

        </div>
    );
};

export default EditFood;