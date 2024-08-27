#! /home/ankit/.nvm/versions/node/v20.16.0/bin/node

const { Client } = require("pg");
require('dotenv').config();

const SQL = `
CREATE TABLE IF NOT EXISTS message_board (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username VARCHAR(255),
  message TEXT,
  added TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO message_board (username, message)
VALUES
  ('john', 'Hey, it is me trying to connect with you for a long time'),
  ('alice', 'I just wanted to say hello and check in on how you are doing.'),
  ('bob', 'Does anyone know how to fix the server issue we discussed yesterday?'),
  ('carol', 'I will be out of the office next week. Please contact Bob for urgent matters.'),
  ('dave', 'Meeting postponed to tomorrow. Please adjust your schedules accordingly.');

`;

async function main() {
    console.log("seeding...");
    console.log(process.env.DB_URL);
    const client = new Client({
        connectionString: process.env.DB_URL,
    });
    await client.connect();
    await client.query(SQL);
    await client.end();
    console.log("done");
}

main();