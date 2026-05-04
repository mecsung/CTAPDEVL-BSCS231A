import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { NotesContextProvider } from "./src/context/notesContext";
import './index.css';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <NotesContextProvider>
    <App />
    </NotesContextProvider>
  </React.StrictMode>
);