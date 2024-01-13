import React, { useState } from "react";
import "./EditorComponent.css";
import "froala-editor/js/plugins.pkgd.min.js";
import "froala-editor/css/froala_style.min.css";
import "froala-editor/css/froala_editor.pkgd.min.css";
import FroalaEditorComponent from "react-froala-wysiwyg";

// Render Froala Editor component.
function EditorComponent() {
  const [model, setModel] = useState(() => {
    return localStorage.getItem("savedText") || "";
  });

  const [inZenMode, setInZenMode] = useState(false);

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
          <h2>Your new note</h2>
          <FroalaEditorComponent
            model={model}
            onModelChange={(e) => setModel(e)}
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
                "save.before": function (html) {
                  localStorage.setItem("savedText", html);
                },
              },
            }}
            tag="textarea"
          />
        </div>
      </div>
    </div>
  );
}

export default EditorComponent;
