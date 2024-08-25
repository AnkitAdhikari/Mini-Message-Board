const { Router } = require('express');
const { getAllMessages, getNewMessageForm, createNewMessage, getSingleMessage } = require('../controllers/messageController');

const messageRouter = Router();

messageRouter.get('/', getAllMessages)
messageRouter.get('/message/:id', getSingleMessage);
messageRouter.get('/new', getNewMessageForm);
messageRouter.post('/new', createNewMessage);

module.exports = messageRouter;