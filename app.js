const express = require("express");
const path = require('node:path');
const messageRouter = require("./routes/messageRouter");
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));


app.use('/', messageRouter);


app.listen(8080, () => {
    console.log("server is running");
})