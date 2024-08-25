const messages = [
    {
        text: "Hi there!",
        user: "Amando",
        added: new Date()
    },
    {
        text: "Hello World!",
        user: "Charles",
        added: new Date()
    },
    {
        text: "Express is fun isn't it?",
        user: "Ankit",
        added: new Date()
    }
];


const getAllMessages = (req, res) => {
    res.render('messages', { messages: messages });
}

const getNewMessageForm = (req, res) => {
    res.render('form');
}

const createNewMessage = (req, res) => {
    messages.push({ ...req.body, added: new Date() });
    res.redirect("/");
}

const getSingleMessage = (req, res) => {
    const id = req.params.id;
    res.render('message', { message: messages[id] })
}

module.exports = { getAllMessages, getNewMessageForm, createNewMessage, getSingleMessage };