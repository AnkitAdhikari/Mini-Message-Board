const getAllMessages = (req, res) => {
    res.render('messages');
}

const getNewMessageForm = (req, res) => {
    res.render('newMessageForm');
}


module.exports = { getAllMessages, getNewMessageForm };