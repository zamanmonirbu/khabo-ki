
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { thunk } from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';
import foodReducer from './reducers/FoodReducer';
import { addToCartReducer } from './reducers/CartReducer';
import { registerUserReducer,loginUserReducer } from './reducers/UsersReducer';
import { placeOrderReducer } from './reducers/OrderReducer';


const all = combineReducers({ foodReducer: foodReducer,addToCartReducer:addToCartReducer,registerUserReducer:registerUserReducer,loginUserReducer:loginUserReducer,placeOrderReducer:placeOrderReducer })

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