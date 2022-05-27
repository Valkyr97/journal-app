import { types } from "../types/types";

export const asyncLogin = (email, password) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(login(123, "hola"));
    }, 3500);
  };
};

export const login = (uid, displayName) => ({
  type: types.login,
  payload: { uid, displayName },
});
