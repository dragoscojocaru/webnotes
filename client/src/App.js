import React from "react";
import EditorComponent from "./EditorComponents/FroalaBasicEditorComponent";
import Navbar from "./NavbarComponents/NavbarComponent.jsx";
import Home from "./Pages/Home";
import AddNote from "./Pages/AddNote";
import NotesList from "./Pages/NotesList";
import { Route, Routes } from "react-router-dom";

function App() {
  // let component;
  // switch (window.location.pathname) {
  //   case "/":
  //     component = <Home />;
  //     break;
  //   case "/AddNote":
  //     component = <AddNote />;
  //     break;
  //   case "/NotesList":
  //     component = <NotesList />;
  //     break;
  // }
  return (
    <div>
      <Navbar />
      <div className="container">
        {/* {component} */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AddNote" element={<AddNote />} />
          <Route path="/NotesList" element={<NotesList />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
