import "./message.css";

function Message(props) {
    return (
        <div className="message">
            {props.model.message}
        </div>
    )
}

export default Message;