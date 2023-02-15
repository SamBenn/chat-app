import React from 'react';

import "./submission.css";

class Submission extends React.Component {
    submissionCallback = (form) => { console.error("Submission callback not set") };

    constructor(props) {
        super();

        this.state = {
            value: props.default ?? ""
        };
        
        if(props.submissionCallback)
            this.submissionCallback = props.submissionCallback;
    }

    handleInputChange = (e) => {
        this.setState({ value: e.target.value });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.submissionCallback(this.state.value)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input value={this.state.value}
                    onChange={this.handleInputChange} />
                <button type="submit" >
                    Submit
                </button>
            </form>
        )
    }
}

export default Submission;