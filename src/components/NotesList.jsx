import NotesCard from "./NotesCard";

const NotesList = ({ notes, onDelete, onMove, lengthNote }) => {
  const notesNotArchived = lengthNote.filter((item) => item === false);

  if (notesNotArchived.length > 0) {
    return (
      <div className="notes-list">
        {notes
          .filter((note) => note.archived === false)
          .map((note) => (
            <NotesCard
              key={note.id}
              id={note.id}
              onDelete={onDelete}
              onMove={onMove}
              {...note}
            />
          ))}
      </div>
    );
  } else {
    return <h3 className="my-7 text-[#9ab8e6]">No items left</h3>;
  }
};

export default NotesList;
