const middleware = (req, res, next) => {
    console.log("Its Working");
    const user = { id: "ASHWIN" };
    res.locals.user = user;
    next();
  };


  module.exports={
    middleware
  }