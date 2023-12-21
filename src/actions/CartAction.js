import { ADD_TO_CART } from "./Constant"

export const addToCart=(food,quantity,variant)=>dispatch=>{

    let cartItem={
        name:food.name,
        _id:food._id,
        image:food.image,
        variant:variant,
        quantity:quantity,
        prices:food.prices,
        price:food.prices[0][variant]*quantity
    }
dispatch({
    type:ADD_TO_CART,
    payload:cartItem
})

}