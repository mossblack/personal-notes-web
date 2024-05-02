import { showFormattedDate } from "../utils/data";

const NotesContent = ({ title, createdAt, body }) => (
  <div>
    <h3 className="text-lg text-[#eaecf0] truncate">{title}</h3>
    <h4 className="text-xs text-[#b6bfca]">{showFormattedDate(createdAt)}</h4>
    <p className="h-32 mt-3 mb-4 overflow-auto">{body}</p>
  </div>
);

export default NotesContent;
