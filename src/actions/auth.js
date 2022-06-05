import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

import { auth, googleProvider } from "../firebase/firebaseConfig";
import { types } from "../types/types";
import { finishLoading, startLoading } from "./ui";

export const loginEmailPass = (email, password) => {
  return async (dispatch) => {
    dispatch(startLoading());
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);
      dispatch(login(user.uid, user.displayName));
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(finishLoading());
    }
  };
};

export const registerEmailPassName = (email, password, name) => {
  return async (dispatch) => {
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await updateProfile(user, { displayName: name });
      dispatch(login(user.uid, user.displayName));
    } catch (error) {
      console.log(error);
    }
  };
};

export const startGoogleLogin = () => {
  return async (dispatch) => {
    const { user } = await signInWithPopup(auth, googleProvider);
    dispatch(login(user.uid, user.displayName));
  };
};

export const startLogout = () => {
  return async (dispatch) => {
    try {
      await signOut(auth);
      dispatch(logout());
    } catch (error) {
      console.log(error);
    }
  };
};

export const login = (uid, displayName) => ({
  type: types.login,
  payload: { uid, displayName },
});

export const logout = () => ({
  type: types.logout,
});
