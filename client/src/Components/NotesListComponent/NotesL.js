import React from "react";
import Note from "../NoteComponent/Note";
import "../EditorComponents/FroalaBasicEditorComponent";

export default function NotesL({ notes, handleDeleteNote, handleEditNote }) {
  return (
    <div className="notes-list">
      {notes.map((note) => (
        <Note
          id={note.id}
          title={note.title}
          content={note.content}
          date={note.date}
          category={note.category}
          handleDeleteNote={handleDeleteNote}
          handleEditNote={handleEditNote}
        />
      ))}
    </div>
  );
}
