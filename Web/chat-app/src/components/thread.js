import Message from "./message";
import "./thread.css";

function Thread() {

    // get messages in thread
    
    var messages = [
        { message: "asdadsfads4" },
        { message: "234b32b324b" },
        { message: "edfbwerb" },
        { message: "n4 5n4nwefgeg" },
        { message: "234h23h34h" },
    ];

    return (
        <div>
            {messages.map(m => (
                <Message model={m} />
            ))}
        </div>
    )
}

export default Thread;