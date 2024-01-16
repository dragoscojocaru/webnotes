import React, { useEffect, useState } from "react";
import NotesL from "../Components/NotesListComponent/NotesL";
import { nanoid } from "nanoid";
import EditorComponent from "../Components/EditorComponents/FroalaBasicEditorComponent";
import "../Components/Button_Style.css";
import Search from "../Components/NotesListComponent/Search";
import Header from "../Components/NotesListComponent/Header";
import Navbar from "../Components/NavbarComponents/NavbarComponent";
import "../Components/NotesList.css";
import axios from "axios";

export default function NotesList() {
  // Definirea categoriilor
  const categories = [
    "Multimedia",
    "Web Technologies",
    "Econometry",
    "PSI",
    "DAM",
    "DSAD",
  ];

  // Starea pentru note
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      title: "Title1",
      content: "Context1",
      date: "Date",
      category: "Category",
    },
    {
      id: nanoid(),
      title: "Title2",
      content: "Context2",
      date: "Date",
      category: "Category",
    },
    {
      id: nanoid(),
      title: "Title3",
      content: "Context3",
      date: "Date",
      category: "Category",
    },
  ]);

  // Starea pentru filtre
  const [showEditor, setShowEditor] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState("");
  const [searchText, setSearchText] = useState("");
  const [searchContent, setSearchContent] = useState("");
  const [selectedNote, setSelectedNote] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  // // Funcția de modificare a notei
  // const handleEditNote = (note) => {
  //   setSelectedNote({ ...note });
  //   setShowEditor(true);
  //   setIsEditing(true);
  // };

  // // Efect pentru încărcarea datelor din localStorage
  // useEffect(() => {
  //   const saveNotes = JSON.parse(localStorage.getItem("react-notes-app-data")); //JSON.parse(axios...) /api/notes/userId  GET
  //   console.log("Fetching data from local storage");
  //   if (saveNotes) {
  //     setNotes(saveNotes);
  //   }
  // }, []);

  // // Efect pentru salvarea datelor în localStorage
  // useEffect(() => {
  //   console.log("Saving data to local storage");
  //   localStorage.setItem("react-notes-app-data", JSON.stringify(notes)); ///api/notes/idNote POST
  // }, [notes]);

  // // Funcția de adăugare a notei
  // const addNote = (note) => {
  //   const newNote = { id: nanoid(), ...note }; // api/notes/create POST
  //   setNotes((prevNotes) => [...prevNotes, newNote]);
  //   setShowEditor(false);
  //   console.log("Note added:", newNote);
  // };

  // // Funcția de ștergere a notei
  // const deleteNote = (id) => {
  //   const newNotes = notes.filter((note) => note.id !== id); // /api/notes/delete DELETE
  //   setNotes(newNotes);
  // };

  const getAllNotes = async () => {
    try {
      const response = await axios.get("/api/notes/all");
      console.log("All notes:", response.data);
    } catch (error) {
      console.error("Error fetching all notes:", error);
    }
  };

  const getNoteById = async (id) => {
    try {
      const response = await axios.get(`/api/notes/${id}`);
      console.log("Note by ID:", response.data);
    } catch (error) {
      console.error(`Error fetching note by ID ${id}:`, error);
    }
  };

  const addNote = async (note) => {
    try {
      const response = await axios.post("/api/notes/create", note);
      console.log("Note added:", response.data);
    } catch (error) {
      console.error("Error adding note:", error);
    }
  };

  const handleEditNote = async (id, updatedNote) => {
    try {
      const response = await axios.put(`/api/notes/${id}`, updatedNote);
      console.log("Note updated:", response.data);
    } catch (error) {
      console.error(`Error updating note with ID ${id}:`, error);
    }
  };

  const deleteNote = async (id) => {
    try {
      const response = await axios.delete(`/api/notes/${id}`);
      console.log("Note deleted:", response.data);
    } catch (error) {
      console.error(`Error deleting note with ID ${id}:`, error);
    }
  };

  // Funcția de căutare a notei
  const handleSearchNote = (query) => {
    setSearchText(query);
    setSearchContent(query);
  };

  return (
    <div id="main-container">
      <Navbar />
      <div className={`${darkMode && "dark-mode"}`}>
        <div className="container">
          <Header handleToggleDarkMode={setDarkMode} />
          <Search handleSearchNote={handleSearchNote} />
          <select
            className="btn_show_hide"
            value={selectedCategoryFilter}
            onChange={(e) => setSelectedCategoryFilter(e.target.value)}
          >
            <option value="">All Categories</option>
            {categories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
          {isEditing && (
            <EditorComponent
              onNoteAdd={addNote}
              initialNote={selectedNote}
              onCancel={() => {
                setIsEditing(false);
                setSelectedNote(null);
              }}
            />
          )}
          <button
            className="btn_show_hide"
            onClick={() => setIsEditing(!isEditing)}
          >
            {isEditing ? "Hide Editor" : "Add a new Note"}
          </button>
          <NotesL
            notes={notes.filter(
              (note) =>
                (note.title.toLowerCase().includes(searchText) ||
                  note.content.toLowerCase().includes(searchContent)) &&
                (selectedCategoryFilter
                  ? note.category === selectedCategoryFilter
                  : true)
            )}
            handleDeleteNote={deleteNote}
            handleEditNote={handleEditNote}
          />
        </div>
      </div>
    </div>
  );
}
