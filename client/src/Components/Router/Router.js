import Navbar from "../NavbarComponents/NavbarComponent";
import Home from "../../Pages/Home";
// import AddNote from "../../Pages/AddNote";
import NotesList from "../../Pages/NotesList";
import Login from "../../Pages/Login";
import Register from "../../Pages/Register";
import { Route, Routes } from "react-router-dom";
import Layout from "../../Pages/Layout";

export default function Router() {
  return (
    
    <div>
      <Navbar />
      <div className="container">
     
        <Routes>
        <Route path="/" element={<Layout/>}>
           <Route path="/" element={<Register/>}/>
           <Route path="login" element={<Login/>}/>
          </Route>
          <Route path="/Home" element={<Home />} />
          {/* <Route path="/AddNote" element={<AddNote />} /> */}
          <Route path="/NotesList" element={<NotesList />} />
         
        </Routes>
       
      </div>
    </div>
  );
}
