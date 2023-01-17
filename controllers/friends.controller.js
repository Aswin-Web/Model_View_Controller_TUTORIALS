const {friends} = require("../Models/friends.model.js")


function getFriends(req, res)  {
    // console.log(JSON.stringify(user))
    console.log(res.locals.user);
    return res.json(friends);
  }

 function friendsUID (req, res)  {
    const userID = req.params.uid;
    console.log(userID);
    let user;
    if (userID) {
      user = friends.filter((person) => {
        return Number(userID) === person.id;
      });
      if (user.length >= 1) {
        res.json(user);
      } else {
        res.send("The user ID is not valid");
      }
    }
  }

  function homePage(req, res)  {
    res.send("<h1>Every thing is working Fyn</h1>");
  }

  function pageNotFound(req, res)  {
    res.render("index")
  }

  module.exports={
    getFriends,
    friendsUID,
    homePage,
    pageNotFound

  }