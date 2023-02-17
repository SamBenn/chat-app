import React from 'react';
import {get} from '../services/service';

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

    componentDidMount() {
        get("/getmessages").then((result) => {
            this.setState({ messages: result.data.messages });
        });
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
                {this.state.messages.map((m, i) => (
                    <Message key={i} model={m} />
                ))}
                <Submission submissionCallback={this.handleSubmission} />
            </div>
        )
    }
}

export default Thread;