
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { thunk } from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';
import foodReducer, { addFoodReducer, deleteFoodReducer, getFoodByIdReducer } from './reducers/FoodReducer';
import { addToCartReducer } from './reducers/CartReducer';
import { registerUserReducer,loginUserReducer } from './reducers/UsersReducer';
import { getUserOrdersReducers, placeOrderReducer } from './reducers/OrderReducer';




const all = combineReducers({ foodReducer: foodReducer,addToCartReducer:addToCartReducer,registerUserReducer:registerUserReducer,loginUserReducer:loginUserReducer,placeOrderReducer:placeOrderReducer,getUserOrdersReducers:getUserOrdersReducers,addFoodReducer:addFoodReducer,getFoodByIdReducer:getFoodByIdReducer ,deleteFoodReducer:deleteFoodReducer})

const composeEnhancers = composeWithDevTools({});

const cartItems= localStorage.getItem('cartItems')? JSON.parse(localStorage.getItem('cartItems')):[];
const currentUser= localStorage.getItem('currentUser')? JSON.parse(localStorage.getItem('currentUser')):null;

const initialState = {
    addToCartReducer:{
        cartItems:cartItems
    },
    loginUserReducer:{
        currentUser:currentUser
    }
}

const store = createStore(all, initialState, composeEnhancers(applyMiddleware(thunk)))

export default store;