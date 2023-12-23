import axios from "axios"

export const placeOrder=(token,subTotal)=>async (dispatch,getState)=>{
    dispatch({type:"PLACE_ORDER_REQUEST"})
    const currentUser=getState().loginUserReducer.currentUser;
    const cartItems=getState().addToCartReducer.cartItems;
    try {
        
        const response=await axios.post('api/orders/placeorder',{token,subTotal,currentUser,cartItems})
        dispatch({type:"PLACE_ORDER_SUCCESS",})
        console.log(response);
    } catch (error) {
        dispatch({type:"PLACE_ORDER_FAILED"})
    }

};


export const getUserOrders = () => async (dispatch,getState) => {
  
    const currentUser=getState().loginUserReducer.currentUser;

    dispatch({
    type: "GET_USER_ORDER_REQUEST",
  });
  try {
    const res = await axios.post("/api/orders/getuserorders",{userid:currentUser._id});
    dispatch({
      type: "GET_USER_ORDER_SUCCESS",
      payload: res.data,
    });
  } catch (error) {
    const errorMessage = error.response?.data?.message || "An error occurred.";
    dispatch({
      type: "GET_USER_ORDER_FAIL",
      payload: errorMessage,
    });
  }
};
