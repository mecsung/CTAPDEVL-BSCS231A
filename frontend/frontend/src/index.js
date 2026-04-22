import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { NotesProvider } from './context/noteContext';


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <NotesProvider>
            <App />
        </NotesProvider>
    </React.StrictMode>
);