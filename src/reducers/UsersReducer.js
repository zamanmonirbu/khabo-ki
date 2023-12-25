import { DELETE_USER_FAILED, DELETE_USER_REQUEST, DELETE_USER_SUCCESS, GET_ALL_USER_FAILED, GET_ALL_USER_REQUEST, GET_ALL_USER_SUCCESS, USER_LOGIN_FAILED, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_REGISTER_FAILED, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS } from "../actions/Constant";

export const registerUserReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_REGISTER_REQUEST: return {
            loading: true,
        }
        case USER_REGISTER_SUCCESS: return {
            loading: false,
            success: true,

        }
        case USER_REGISTER_FAILED: return {
            loading: false,
            error: action.payload,
        }

        default:
            return state
    }
};


export const loginUserReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_LOGIN_REQUEST: return {
            loading: true,
        }
        case USER_LOGIN_SUCCESS: return {
            loading: false,
            success: true,
            currentUser: action.payload,

        }
        case USER_LOGIN_FAILED: return {
            loading: false,
            error: action.payload,
        }

        default:
            return state
    }
};
export const getAllUserReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_ALL_USER_REQUEST: return {
            loading: true,
        }
        case GET_ALL_USER_SUCCESS: return {
            loading: false,
            success: true,
            users: action.payload,

        }
        case GET_ALL_USER_FAILED: return {
            loading: false,
            error: action.payload,
        }

        default:
            return state
    }
};

export const deleteUserReducer = (state = {}, action) => {
    switch (action.type) {
        case DELETE_USER_REQUEST:
            return {
                ...state,
                deleteLoading: true,
            };
        case DELETE_USER_SUCCESS:
            return {
                ...state,
                deleteLoading: false,
                deleteSuccess: true,
            };
        case DELETE_USER_FAILED:
            return {
                ...state,
                deleteError: action.payload,
                deleteLoading: false,
            };
        default:
            return state;
    }
};