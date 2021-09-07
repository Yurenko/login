/* eslint-disable */
import axios from 'axios';
import {
  errorLoginActions,
  requestLoginActions,
  successLoginActions,
  errorSingupActions,
  requestSingupActions,
  successSingupActions,
  userLogoutActions,
  requestRefreshActions,
  successRefreshActions,
  errorRefreshActions,
} from '../redux/LoginActions';
import { getToken } from './LoginSelectors';

axios.default.baseURL = 'http://localhost:4040/';

const setAuthToken = token => {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

const clearAuthToken = () => {
  axios.defaults.headers.common['Authorization'] = null;
};

export const login = credentials => dispatch => {
  dispatch(requestLoginActions());

  axios
    .post('http://localhost:4040/auth/signup', credentials)
    .then(res => {
      setAuthToken(res.data.token);
      dispatch(successLoginActions(res.data));
    })
    .catch(error => dispatch(errorLoginActions(error)));
};

export const singup = credentials => dispatch => {
  dispatch(requestSingupActions());

  axios
    .post('http://localhost:4040/auth/signin', credentials)
    .then(res => {
      setAuthToken(res.data.token);
      dispatch(successSingupActions(res.data));
    })
    .catch(error => dispatch(errorSingupActions(error)));
};

export const refresh = () => (dispatch, getState) => {
  const token = getToken(getState());

  if (!token) {
    return;
  }
  setAuthToken(token);

  dispatch(requestRefreshActions());

  axios
    .get('http://localhost:4040/auth/current')
    .then(res => dispatch(successRefreshActions(res.data)))
    .catch(error => dispatch(errorRefreshActions(error)));
};

export const logout = () => dispatch => {
  clearAuthToken();
  dispatch(userLogoutActions());
};
