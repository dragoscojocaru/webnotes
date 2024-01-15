import Register from "./authComponents/Register";
import Login from "./Login";
import Layout from "./authComponents/Layout";
import LinkPage from "./authComponents/LinkPage";

import {Routes, Route} from 'react-router-dom';

function App() {
  return (
   <Routes>
    <Route path="/" element={<Layout/>}>
      {/*rutele publice */}
      <Route path="/" element={<Register/>}/>
      <Route path="login" element={<Login/>}/>
      <Route path="linkpage" element={<LinkPage/>}/>
     

      {/*rutele care sunt protejate(Home/AddNote/NotesList) */} 
     
      {/*<Route path="home" element={<Home/>} /> */ }
   

    </Route>
   </Routes>
   
  );
}

export default App;
