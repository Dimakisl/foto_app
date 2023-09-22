import {setTokenAccess} from '../API/token';

const initialState = {
  access_token: '',
};

export const AUTH_REQUEST = 'AUTH_REQUEST';
export const AUTH_REQUEST_SUCCESS = 'AUTH_REQUEST_SUCCESS';
export const AUTH_REQUEST_ERROR = 'AUTH_REQUEST_ERROR';
export const AUTH_LOGOUT = 'AUTH_LOGOUT';

export const authRequest = () => ({
  type: AUTH_REQUEST,
});

export const authRequestSuccess = (data) => ({
  type: AUTH_REQUEST_SUCCESS,
  data
});

export const authRequestError = (error) => ({
  type: AUTH_REQUEST_ERROR,
  error
});

export const authLogout = () => ({
  type: AUTH_LOGOUT,
});

export const authReducer = (state = initialState, action) => {
  console.log(action, 'auth');
  switch (action.type) {
    case AUTH_REQUEST:
      return {
        ...state,
        access_token: action.token
      };
    case AUTH_REQUEST_SUCCESS:
      if (action.data.access_token) {
        setTokenAccess(action.data.access_token);
      }
      return {
        ...state,
        access_token: action.data.access_token
      };
    default:
      return state;
  }
};