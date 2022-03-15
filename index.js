require("dotenv").config();

const express = require("express");
const app = express();

require('./startup/routes')(app)
require(`./startup/db`)();

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const winston = require("winston");

//Middlewares
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());


const PORT = process.env.PORT || 5050;

app.listen(PORT, () => winston.info(`Server is running on ${PORT}`));
