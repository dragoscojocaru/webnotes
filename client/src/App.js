import React from "react";
import Router from "./Components/Router/Router.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Iar e bine
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
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
  return <Router />;
}

export default App;
