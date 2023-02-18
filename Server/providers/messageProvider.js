const Message = require('../models/message')

async function getMessagesForThread(threadId) {
    var result = {
        message: "nowt found pal"
    };

    var response = await Message.find()

    return response
}

async function createMessage(form) {
    console.log("provicer")
    console.log(form)
    if(!form)
    {
        return { message: "error" };
    }

    var result = await Message.insertOne({ message: form.message })

    return result;
}

module.exports = {
    getMessagesForThread,
    createMessage
}