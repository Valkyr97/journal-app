import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import validator from "validator";

import { removeError, setError } from "../../actions/ui";
import { useForm } from "../../hooks/useForm";
import { registerEmailPassName } from "../../actions/auth";

export const RegisterScreen = () => {
  const [{ name, email, password, password2 }, handleChange] = useForm({
    name: "Janyel",
    email: "gm97@gmail.com",
    password: "123456",
    password2: "123456",
  });

  const { msgError } = useSelector((state) => state.ui);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid()) dispatch(registerEmailPassName(email, password, name));
  };

  const isFormValid = () => {
    if (name.trim().length < 2) {
      dispatch(setError("Name is not valid"));
      return false;
    } else if (!validator.isEmail(email)) {
      dispatch(setError("Email is not valid"));
      return false;
    } else if (password.length < 6) {
      dispatch(setError("Password has to be with at least 6 characters"));
    } else if (password !== password2) {
      dispatch(setError("Confirmation password error"));
      return false;
    }
    dispatch(removeError());
    return true;
  };

  return (
    <>
      <h3 className="auth__title mb-1">Register</h3>
      <form onSubmit={handleSubmit}>
        {msgError && <div className="auth__alert-error">{msgError}</div>}
        <input
          className="auth__input"
          type="text"
          placeholder="Name"
          name="name"
          onChange={handleChange}
          value={name}
          autoComplete="off"
        />
        <input
          className="auth__input"
          type="text"
          placeholder="Email"
          name="email"
          onChange={handleChange}
          value={email}
          autoComplete="off"
        />
        <input
          className="auth__input"
          type="password"
          placeholder="Password"
          name="password"
          onChange={handleChange}
          value={password}
          autoComplete="off"
        />
        <input
          className="auth__input"
          type="password"
          placeholder="Confirm"
          name="password2"
          onChange={handleChange}
          value={password2}
          autoComplete="off"
        />
        <button className="btn btn-primary btn-block mb-5" type="submit">
          Register
        </button>

        <Link className="link" to={"/auth/login"}>
          Alredy registered?
        </Link>
      </form>
    </>
  );
};
