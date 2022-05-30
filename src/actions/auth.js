import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { auth, googleProvider } from "../firebase/firebaseConfig";
import { types } from "../types/types";

export const loginEmailPass = (email, password) => {
  return async (dispatch) => {
    const { user } = await signInWithEmailAndPassword(auth, email, password);
    dispatch(login(user.uid, user.displayName));
  };
};

export const registerMailPassName = (email, password, name) => {
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

export const login = (uid, displayName) => ({
  type: types.login,
  payload: { uid, displayName },
});
