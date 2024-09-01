const express = require('express');
const cors = require('cors');
const { db } = require('./db/db');
const {readdirSync} = require('fs')


//dotenv
require('dotenv').config()

const app = express();

//middleware
app.use(express.json())
app.use(cors())

//port
const Port = process.env.PORT 

//router
readdirSync('./routes').map((route) => app.use ('/api/v1', require('./routes/' + route)))

//server
app.listen(Port, () => {
    console.log(`Server is running on port ${Port}`);
    db()
});

