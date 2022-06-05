import React from "react";
import { useDispatch } from "react-redux";
import { startLogout } from "../../actions/auth";
import { JournalEntries } from "./JournalEntries";

export const Sidebar = () => {
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(startLogout());
  };

  return (
    <aside className="journal__sidebar">
      <div className="journal__sidebar-nav">
        <h3 className="mt-5">
          <i className="far fa-moon"></i>
          <span> Hola Mundo</span>
        </h3>
        <button onClick={handleLogOut} className="btn">
          Logout
        </button>
      </div>
      <div className="journal__new-entry">
        <i className="fa fa-calendar-plus fa-5x"></i>
        <p>New entry</p>
      </div>
      <JournalEntries />
    </aside>
  );
};
