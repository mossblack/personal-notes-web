import React from "react";

const NotesButtons = ({ id, onDelete, onMove }) => (
    <form className="flex gap-3">
        <button type="button" className="button-input__delete" onClick={() => onDelete(id)}>Delete</button>
        <button type="button" className="button-input__move" onClick={() => onMove(id)}>Move</button>
    </form>
);

export default NotesButtons;