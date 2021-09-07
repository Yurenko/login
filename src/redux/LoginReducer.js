import { combineReducers } from 'redux';
import { ActionsTypes } from './LoginActions';

const login = (state = [], { type, payload }) => {
  switch (type) {
    case ActionsTypes.USER_LOGIN_SUCCESS:
    case ActionsTypes.USER_SINGUP_SUCCESS:
      return payload.user.user;
    case ActionsTypes.REFRESH_USER_SUCCESS:
      return payload.user;
    case ActionsTypes.USER_LOGOUT:
      return null;
    default:
      return state;
  }
};

const authorization = (state = false, { type }) => {
  switch (type) {
    case ActionsTypes.USER_LOGIN_SUCCESS:
    case ActionsTypes.USER_SINGUP_SUCCESS:
    case ActionsTypes.REFRESH_USER_SUCCESS:
      return true;
    case ActionsTypes.USER_LOGOUT:
      return false;
    default:
      return state;
  }
};

const token = (state = [], { type, payload }) => {
  switch (type) {
    case ActionsTypes.USER_LOGIN_SUCCESS:
    case ActionsTypes.USER_SINGUP_SUCCESS:
      return payload.user.token;
    case ActionsTypes.USER_LOGOUT:
      return null;
    default:
      return state;
  }
};

const error = (state = [], { type, payload }) => {
  switch (type) {
    case ActionsTypes.USER_LOGIN_ERROR:
    case ActionsTypes.USER_SINGUP_ERROR:
    case ActionsTypes.REFRESH_USER_ERROR:
      return payload.error;
    default:
      return state;
  }
};

export default combineReducers({
  login,
  token,
  authorization,
  error,
});
