const { Router } = require('express');
const { getAllMessages, getNewMessageForm, createNewMessage } = require('../controllers/messageController');

const messageRouter = Router();

messageRouter.get('/', getAllMessages)
messageRouter.get('/new', getNewMessageForm);
messageRouter.post('/new', createNewMessage);

module.exports = messageRouter;