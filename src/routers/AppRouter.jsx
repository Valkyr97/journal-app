import React, { useEffect, useState } from "react";

import { useDispatch } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";

import { AuthRouter } from "./AuthRouter";
import { auth } from "../firebase/firebaseConfig";
import { login } from "../actions/auth";

import { LoginScreen } from "../components/auth/LoginScreen";
import { JournalScreen } from "../components/journal/JournalScreen";
import { PublicRoute } from "./PublicRoute";
import { PrivateRoute } from "./PrivateRoute";

export const AppRouter = () => {
  const [checking, setChecking] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user?.uid) {
        dispatch(login(user.uid, user.displayName));
      }
      setChecking(false);
    });
  }, []);

  if (checking) {
    return <h1>Espere....</h1>;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <JournalScreen />
            </PrivateRoute>
          }
        />
        
        <Route
          path="auth/*"
          element={
            <PublicRoute>
              <AuthRouter />
            </PublicRoute>
          }
        />
        <Route path="*" element={<LoginScreen />} />
      </Routes>
    </BrowserRouter>
  );
};
