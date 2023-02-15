import React from 'react';

import Message from "./message";
import Submission from "./submission";
import "./thread.css";

class Thread extends React.Component {
    constructor() {
        super();

        this.state = {
            messages: []
        };
    }

    handleSubmission = (form) => {
        if(!form)
            return;

        // other validation

        this.setState({ messages: [...this.state.messages, { message: form }] });
    }
    
    render() {
        return (
            <div>
                {this.state && this.state.messages.map((m, i) => (
                    <Message key={i} model={m} />
                ))}
                <Submission submissionCallback={this.handleSubmission} />
            </div>
        )
    }
}

export default Thread;