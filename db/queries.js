const db = require("./pool");

async function insertUserAndMessage(user, message) {
    await db.query('INSERT INTO message_board (username,message) VALUES ($1,$2)', [user, message]);
}

async function selectAllMessages() {
    const { rows } = await db.query('SELECT * FROM message_board');
    return rows;
}

async function selectSingleMessage(id) {
    const { rows } = await db.query('SELECT * FROM message_board where id=$1', [id]);
    return rows;
}

module.exports = {
    insertUserAndMessage,
    selectAllMessages,
    selectSingleMessage,
}