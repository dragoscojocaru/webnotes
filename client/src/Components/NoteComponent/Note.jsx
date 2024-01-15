import React from "react";
import { MdDeleteForever } from "react-icons/md";
import "./Note.css";
import "../EditorComponents/FroalaBasicEditorComponent";

export default function Note({
  id,
  title,
  content,
  date,
  category,
  handleDeleteNote,
  handleEditNote,
}) {
  return (
    <div
      className="note"
      onClick={() => handleEditNote({ id, title, content, date, category })}
    >
      <h3>{title}</h3>
      <p>{content}</p>
      <div className="note-footer">
        <small>{date}</small>
        <small>{category}</small>
        <span className="delete-icon" onClick={() => handleDeleteNote(id)}>
          Delete
        </span>
      </div>
    </div>
  );
}
