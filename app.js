const express = require("express");
const path = require('node:path');
const messageRouter = require("./routes/messageRouter");
const PORT = process.env.PORT || 3000;
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));


app.use('/', messageRouter);


app.listen(PORT, () => {
    console.log("server is running");
})