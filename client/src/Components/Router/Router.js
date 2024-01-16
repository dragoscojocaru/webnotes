import Navbar from "../NavbarComponents/NavbarComponent";
import Home from "../../Pages/Home";
// import AddNote from "../../Pages/AddNote";
import NotesList from "../../Pages/NotesList";
import Layout from "../../authComponents/Layout";
import Register from "../../authComponents/Register";
import LinkPage from "../../authComponents/LinkPage";
import Login from "../../authComponents/Login";

import { Route, Routes } from "react-router-dom";

export default function Router() {
  return (
    <div>
      <div className="container">
        <Routes>
          <Route path="/" element={<Layout />}>
            {/*rutele publice */}
            <Route path="/" element={<Register />} />
            <Route path="login" element={<Login />} />
            <Route path="linkpage" element={<LinkPage />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/NotesList" element={<NotesList />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}
