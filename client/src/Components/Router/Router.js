import Navbar from "../NavbarComponents/NavbarComponent";
import Home from "../../Pages/Home";
// import AddNote from "../../Pages/AddNote";
import NotesList from "../../Pages/NotesList";

import { Route, Routes } from "react-router-dom";

export default function Router() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/NotesList" element={<NotesList />} />
        </Routes>
      </div>
    </div>
  );
}
