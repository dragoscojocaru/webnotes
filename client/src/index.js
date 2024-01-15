import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from './context/AuthProvider';
import {BrowserRouter, Routes, Route} from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <BrowserRouter>
      <AuthProvider>
        <Routes>
         <Route path="/*" element={<App/>} />
    </BrowserRouter>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
