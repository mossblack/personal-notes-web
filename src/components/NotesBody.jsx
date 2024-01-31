import React from "react";
import NotesInput from "./NotesInput";
import NotesList from "./NotesList";
import NotesListArchive from "./NotesListArchive";
import { getInitialData } from "../utils/data";

class NotesBody extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: getInitialData()
        }

        this.onAddNotesHandler = this.onAddNotesHandler.bind(this);
        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onMoveHandler = this.onMoveHandler.bind(this);
    }

    onAddNotesHandler({ title, body, createdAt }) {
        this.setState(prevState => {
            return {
                notes: [
                    {
                        id: +new Date(),
                        title,
                        body,
                        createdAt,
                        archived: false,
                    },
                    ...prevState.notes,
                ]
            }
        })
    }

    onDeleteHandler(id) {
        const notes = this.state.notes.filter(note => note.id !== id);
        this.setState({ notes });
    }

    onMoveHandler(id) {
        const findId = this.state.notes.findIndex(item => item.id === id);
        this.setState(() => this.state.notes[findId].archived ? this.state.notes[findId].archived = false : this.state.notes[findId].archived = true)
    }

    lengthNoteFunc() {
        return this.state.notes.map(note => note.archived)
    }

    render() {
        return (
            <main className="flex flex-col items-center max-w-2xl w-full gap-7">
                <hr className="hr-line"/>
                <NotesInput addNotes={this.onAddNotesHandler} />
                <hr className="hr-line"/>
                <h2 className="text-xl">Notes</h2>
                <NotesList notes={this.state.notes} onDelete={this.onDeleteHandler} onMove={this.onMoveHandler} lengthNote={this.lengthNoteFunc()}/>
                <hr className="hr-line"/>
                <h2 className="text-xl">Archives</h2>
                <NotesListArchive notes={this.state.notes} onDelete={this.onDeleteHandler} onMove={this.onMoveHandler} lengthNote={this.lengthNoteFunc()} />
            </main>
        )
    }
}

export default NotesBody;