    import { ADD_TO_CART, DELETE_FROM_CART } from "./Constant"

    export const addToCart = (food, quantity, variant) => (dispatch, getState) => {

        let cartItem = {
            name: food.name,
            _id: food._id,
            image: food.image,
            variant: variant,
            quantity: quantity,
            prices: food.prices,
            price: food.prices[0][variant] * quantity
        }
        if (cartItem.quantity > 10) {
            alert("Not will be more than 10 item")
        }
        else {
            if (cartItem.quantity < 1) {
                dispatch({ type: DELETE_FROM_CART, payload: cartItem })
            } else {
                dispatch({ type: "ADD_TO_CART", payload: cartItem })

            }
        }
        dispatch({
            type: ADD_TO_CART,
            payload: cartItem
        });

        const cartItems = getState().addToCartReducer.cartItems

        localStorage.setItem('cartItems', JSON.stringify(cartItems))

    }

    export const deleteFromCart = (food) => (dispatch, getState) => {
        dispatch({
            type: DELETE_FROM_CART,
            payload: food,
        });

        const cartItems = getState().addToCartReducer.cartItems

        localStorage.setItem('cartItems', JSON.stringify(cartItems))
    }