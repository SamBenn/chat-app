import React from 'react';
import { get, post } from '../services/service';

import Message from "./message";
import Submission from "./submission";
import "./thread.css";

class Thread extends React.Component {

    id = "12312312312312"

    constructor() {
        super();

        this.state = {
            messages: []
        };
    }

    componentDidMount() {
        get(`/messages/getMessagesForThread/${this.id}`).then((result) => {
            this.setState({ messages: result.data.messages });
        });
    }

    handleSubmission = (form) => {
        if(!form)
            return;

        // other validation
        
        post('/messages/createMessage', {
            form: form
        }).then((result) => {
            this.setState({ messages: [...this.state.messages, result] });
        })
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