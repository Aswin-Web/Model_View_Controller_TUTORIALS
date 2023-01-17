const express = require("express");
const path=require("path")
const { getFriends, friendsUID, homePage, pageNotFound } = require("./controllers/friends.controller");
const { middleware } = require("./middlewares/basic_middleware");
const {friends} = require("./Models/friends.model.js");
const { friendsRouter } = require("./routes/friends.routes");
const app = express();
var hbs=require("hbs")

// Hbs initialization

app.set('view engine','hbs')

app.set('views',"./views")

//MiddleWares

app.use(express.json());

// Express router

app.use("/friends",friendsRouter)

// Routes 
app.get("/friends", middleware,getFriends);

app.get("/friend/:uid",friendsUID);

app.get("/",homePage);

app.get("*", pageNotFound)

const PORT = 5000;

app.listen(PORT, () => `The server is Listning on ${PORT}`);
