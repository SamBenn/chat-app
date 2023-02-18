const provider = require('../providers/messageProvider')

const getAllForThread = (req, res, next) => {
    var result = provider.getMessagesForThread(req.params.id)

    res.data = result;
}

module.exports = {
    getAllForThread
}