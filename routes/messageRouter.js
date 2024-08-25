const { Router } = require('express');
const { getAllMessages, getNewMessageForm } = require('../controllers/messageController');

const messageRouter = Router();

messageRouter.get('/', getAllMessages)
messageRouter.get('/new', getNewMessageForm);

module.exports = messageRouter;