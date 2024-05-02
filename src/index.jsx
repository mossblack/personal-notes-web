import { createRoot } from "react-dom/client";
import NotesApp from "./components/NotesApp";
import "./stylings/style.css";

const root = createRoot(document.getElementById("root"));
root.render(<NotesApp />);
