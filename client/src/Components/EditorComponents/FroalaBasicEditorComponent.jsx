import React, { useState } from "react";
import "./EditorComponent.css";
import "froala-editor/js/plugins.pkgd.min.js";
import "froala-editor/css/froala_style.min.css";
import "froala-editor/css/froala_editor.pkgd.min.css";
import FroalaEditorComponent from "react-froala-wysiwyg";

function EditorComponent({ onNoteAdd }) {
  const [note, setNote] = useState({
    title: "",
    content: "",
    category: "",
  });

  const [inZenMode, setInZenMode] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");

  const categories = [
    "Multimedia",
    "Web Technologies",
    "Econometry",
    "PSI",
    "DAM",
    "DSAD",
  ];

  const handleTitleChange = (e) => {
    setNote((prevNote) => ({ ...prevNote, title: e.target.value }));
  };

  const handleSaveClick = () => {
    if (note.title.trim() === "") {
      alert("Title cannot be empty! Please enter a title.");
      return;
    }

    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleString();

    //Transform HTML into Txt
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = note.content;
    const plainTextContent = tempDiv.textContent || tempDiv.innerText;

    const newNote = {
      ...note,
      date: formattedDate,
      category: selectedCategory,
      content: plainTextContent,
    };

    // Pass the new note to the parent component
    onNoteAdd(newNote);

    // Clear the editor
    setNote({
      title: "",
      content: "",
      category: "",
    });

    setSelectedCategory("");
  };

  return (
    <div
      id="app-container"
      className={inZenMode ? "zen-background" : "default-background"}
    >
      <div id="main-container">
        <div>
          <h1>Write in Zen Mode</h1>
          <button id="btn-zen" onClick={() => setInZenMode(!inZenMode)}>
            Toggle Zen Mode
          </button>
        </div>

        <div className="editor">
          {/* Input title */}
          <input
            id="input-title"
            type="text"
            value={note.title}
            onChange={handleTitleChange}
            placeholder="Your note title"
          />

          {/* Froala Editor */}
          <FroalaEditorComponent
            model={note.content}
            onModelChange={(e) =>
              setNote((prevNote) => ({ ...prevNote, content: e }))
            }
            config={{
              saveInterval: 2000,
              fontSize: ["10", "11", "12", "14", "18", "24", "30", "36", "42"],
              placeholderText: "Start writing your note...",
              charCounterMax: 200,
              events: {
                "charCounter.exceeded": function () {
                  alert(
                    "You have exceeded the maximum allowed characters! Buy the pro version to increase the limit."
                  );
                },
              },
            }}
            tag="textarea"
          />

          {/* Dropdown for categories */}
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            id="drop-list"
          >
            <option value="" disabled>
              Select a category
            </option>
            {categories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>

          {/* Button for Save Note */}
          <button id="btn-save" onClick={handleSaveClick}>
            Save Note
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditorComponent;
