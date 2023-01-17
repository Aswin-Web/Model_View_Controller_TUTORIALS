const { Router } = require("express")
const express=require("express")
const { getFriends } = require("../controllers/friends.controller")
const { middleware } = require("../middlewares/basic_middleware")

const friendsRouter=express.Router()

friendsRouter.get("/",middleware,getFriends)

module.exports ={
    friendsRouter
}