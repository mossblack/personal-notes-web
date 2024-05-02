import NotesCard from "./NotesCard";

const NotesListArchive = ({ notes, onDelete, onMove, lengthNote }) => {
  const notesArchived = lengthNote.filter((item) => item);

  if (notesArchived.length > 0) {
    return (
      <div className="notes-list">
        {notes
          .filter((note) => note.archived)
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

export default NotesListArchive;
