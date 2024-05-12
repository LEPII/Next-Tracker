const express = require("express");
const boddParser = require("body-parser");
const cors = require("cors");
const passport = require("passport");
const expressSession = require("express-session")
const cookieParser = require("cookie-parser");
const bcrypt = require("bcrypt")

const app = express() 

app.listen(3001, () =>
{
    console.log("server is live")
})