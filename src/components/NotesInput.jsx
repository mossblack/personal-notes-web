import React from "react";
import { format } from "date-fns";

const currentDate = new Date();
const formattedDate = format(currentDate, "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'");

class NotesInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: '',
            createdAt: formattedDate,
        };

        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    };

    onTitleChangeEventHandler(event) {
        this.setState(() => {
            return {
                title: event.target.value
            }
        })
    };

    onBodyChangeEventHandler(event) {
        this.setState(() => {
            return {
                body: event.target.value
            }
        })
    };

    onSubmitEventHandler(event) {
        event.preventDefault();
        this.props.addNotes(this.state);
    };

    render() {
        return (
        <form className="notes-container max-w-lg w-full" onSubmit={this.onSubmitEventHandler}>
            <h2 className="text-center text-xl">Create Notes</h2>
            <textarea name="title" placeholder="Title" rows="1" className="text-input" value={this.state.title} onChange={this.onTitleChangeEventHandler}></textarea>
            <textarea name="body" placeholder="Body" rows="5" className="text-input" value={this.state.body} onChange={this.onBodyChangeEventHandler}></textarea>
            <hr className="hr-line"/>
            <button type="submit" className="button-input__submit">Create</button>
        </form>
        )
    };
};

export default NotesInput