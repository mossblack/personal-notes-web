import NotesContent from "./NotesContent";
import NotesButtons from "./NotesButtons";

const NotesCard = ({ title, createdAt, body, id, onDelete, onMove }) => (
  <div className="notes-container gap-1">
    <NotesContent title={title} createdAt={createdAt} body={body} />
    <NotesButtons id={id} onDelete={onDelete} onMove={onMove} />
  </div>
);

export default NotesCard;
