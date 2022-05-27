import React from "react";
import { imageForBody } from "../../data";
import { NotesAppBar } from "./NotesAppBar";

export const NoteScreen = () => {
  return (
    <div className="notes__main-content">
      <NotesAppBar />
      <div className="notes__content">
        <input
          type="text"
          placeholder="Some awsome title"
          className="notes__title-input"
        />
        <textarea
          name="noteDescription"
          cols="30"
          rows="10"
          placeholder="What happen today"
          className="notes__textarea"
        ></textarea>
        <div className="notes__image">
          <img src={imageForBody} alt="image" />
        </div>
      </div>
    </div>
  );
};
