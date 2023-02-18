const provider = require('../providers/messageProvider')

const getAllForThread = (req, res, next) => {
    var result = provider.getMessagesForThread(req.params.id)

    res.send({ messages: [...result] });
}

const createMessage = (req, res, next) => {
    console.log("controller")
    var result = provider.createMessage(req.body)

    res.send(result);
}

module.exports = {
    getAllForThread,
    createMessage
}