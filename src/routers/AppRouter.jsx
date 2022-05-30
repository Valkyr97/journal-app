import React, { useEffect } from "react";

import { useDispatch } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";

import { AuthRouter } from "./AuthRouter";
import { auth } from "../firebase/firebaseConfig";
import { login } from "../actions/auth";

import { LoginScreen } from "../components/auth/LoginScreen";
import { JournalScreen } from "../components/journal/JournalScreen";

export const AppRouter = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user?.uid) {
        dispatch(login(user.uid, user.displayName));
      }
    });
  }, []);

  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<JournalScreen />} />
          <Route path="auth/*" element={<AuthRouter />} />
          <Route path="*" element={<LoginScreen />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
