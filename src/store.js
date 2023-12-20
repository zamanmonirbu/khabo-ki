
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { thunk } from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';
import foodReducer from './reducers/FoodReducer';


const all = combineReducers({ foodReducer: foodReducer })

const composeEnhancers = composeWithDevTools({})
const initialState = {

}

const store = createStore(all, initialState, composeEnhancers(applyMiddleware(thunk)))

export default store;