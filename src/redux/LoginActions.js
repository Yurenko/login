export const ActionsTypes = {
  USER_LOGIN_REQUEST: 'USER_LOGIN_REQUEST',
  USER_LOGIN_SUCCESS: 'USER_LOGIN_SUCCESS',
  USER_LOGIN_ERROR: 'USER_LOGIN_ERROR',
  REFRESH_USER_REQUEST: 'REFRESH_USER_REQUEST',
  REFRESH_USER_SUCCESS: 'REFRESH_USER_SUCCESS',
  REFRESH_USER_ERROR: 'REFRESH_USER_ERROR',
  USER_SINGUP_REQUEST: 'USER_SINGUP_REQUEST',
  USER_SINGUP_SUCCESS: 'USER_SINGUP_SUCCESS',
  USER_SINGUP_ERROR: 'USER_SINGUP_ERROR',
  USER_LOGOUT: 'USER_LOGOUT',
};

export const requestLoginActions = () => ({
  type: ActionsTypes.USER_LOGIN_REQUEST,
});

export const successLoginActions = user => ({
  type: ActionsTypes.USER_LOGIN_SUCCESS,
  payload: { user },
});

export const errorLoginActions = error => ({
  type: ActionsTypes.USER_LOGIN_ERROR,
  payload: { error },
});

export const requestRefreshActions = () => ({
  type: ActionsTypes.REFRESH_USER_REQUEST,
});

export const successRefreshActions = user => ({
  type: ActionsTypes.REFRESH_USER_SUCCESS,
  payload: { user },
});

export const errorRefreshActions = error => ({
  type: ActionsTypes.REFRESH_USER_ERROR,
  payload: { error },
});

export const requestSingupActions = () => ({
  type: ActionsTypes.USER_LOGIN_REQUEST,
});

export const successSingupActions = user => ({
  type: ActionsTypes.USER_LOGIN_SUCCESS,
  payload: { user },
});

export const errorSingupActions = error => ({
  type: ActionsTypes.USER_LOGIN_ERROR,
  payload: { error },
});

export const userLogoutActions = () => ({
  type: ActionsTypes.USER_LOGOUT,
});
