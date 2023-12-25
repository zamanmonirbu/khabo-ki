import axios from "axios";
import { DELETE_USER_FAILED, DELETE_USER_REQUEST, DELETE_USER_SUCCESS, GET_ALL_USER_FAILED, GET_ALL_USER_REQUEST, GET_ALL_USER_SUCCESS, USER_LOGIN_FAILED, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_REGISTER_FAILED, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS } from "./Constant";

export const registerUser = (user) => async dispatch => {
    dispatch({ type: USER_REGISTER_REQUEST })
    try {
        const response = await axios.post('/api/user/register', user)
        dispatch({ type: USER_REGISTER_SUCCESS, payload: response })
    } catch (error) {
        dispatch({ type: USER_REGISTER_FAILED, payload: error })
    }
};
export const loginUser = (user) => async dispatch => {
    dispatch({ type: USER_LOGIN_REQUEST })
    try {
        const response = await axios.post('/api/user/login', user)
        console.log(response);
        dispatch({ type: USER_LOGIN_SUCCESS, payload: response.data })
        localStorage.setItem("currentUser", JSON.stringify(response.data))
        window.location.href = '/'
    } catch (error) {
        dispatch({ type: USER_LOGIN_FAILED, payload: error })
    }
};
export const getAllUser = () => async dispatch => {
    dispatch({ type: GET_ALL_USER_REQUEST })
    try {
        const response = await axios.get('/api/all/user')
        console.log(response);
        dispatch({ type: GET_ALL_USER_SUCCESS, payload: response.data })
    } catch (error) {
        dispatch({ type: GET_ALL_USER_FAILED, payload: error })
    }
};


export const deleteUser = (id) => async (dispatch) => {

    dispatch({ type: DELETE_USER_REQUEST });
    try {
        await axios.delete(`/api/delete/user/${id}`);
        dispatch({ type: DELETE_USER_SUCCESS });
        alert("Deleted Successfully")
        window.location.reload();
    } catch (error) {
        dispatch({ type: DELETE_USER_FAILED, payload: error });
    }
};


export const logoutUser = () => dispatch => {
    localStorage.removeItem('currentUser')
    window.location.href = '/login'
}