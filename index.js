const express = require("express");
const { getFriends, friendsUID, homePage, pageNotFound } = require("./controllers/friends.controller");
const { middleware } = require("./middlewares/basic_middleware");
const {friends} = require("./Models/friends.model.js")
const app = express();



app.use(express.json());




app.get("/friends", middleware,getFriends);

app.get("/friend/:uid",friendsUID);

app.get("/",homePage);

app.get("*", pageNotFound)

const PORT = 5000;

app.listen(PORT, () => `The server is Listning on ${PORT}`);
