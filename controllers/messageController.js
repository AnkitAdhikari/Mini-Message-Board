const { selectAllMessages, selectSingleMessage, insertUserAndMessage } = require("../db/queries");

const getAllMessages = async (req, res) => {
    const messages = await selectAllMessages();
    res.render('messages', { messages: messages });
}

const getNewMessageForm = (req, res) => {
    res.render('form');
}



const createNewMessage = async (req, res) => {
    let added = Date.now();
    const { user: username, text: message } = req.body;
    await insertUserAndMessage(username, message, added);
    res.redirect("/");
}

const getSingleMessage = async (req, res) => {
    const id = req.params.id;
    const [message] = await selectSingleMessage(id);
    res.render('message', { message: message })
}

module.exports = { getAllMessages, getNewMessageForm, createNewMessage, getSingleMessage };