const Message = require('../models/message')

async function getMessagesForThread(threadId) {
    var result = {
        message: "nowt found pal"
    };

    var response = await Message.find()

    console.log(response);

    return result
}

module.exports = {
    getMessagesForThread
}