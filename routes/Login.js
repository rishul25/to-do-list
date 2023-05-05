const express = require("express");
const router = express.Router(); // Instance of Router in Express

const UserModel = require("../models/User");




router.post("/", async function(req, res){
  try {
      
      const user = await UserModel.findOne({ email: req.body.email });
      

      if (user) {
        const result = req.body.password === user.password;
        if (result) {
          if(user.role==="Student"){
            res.send(user)
          }
          else if(user.role==="Admin"){
            res.send(user)
          }
          else{
            res.send(user)
          }
        } else {
          res.status(400).json({ error: "password doesn't match" });
        }
      } else {
        res.status(400).json({ error: "User doesn't exist" });
      }
    } catch (error) {
      res.status(400).json({ error });
    }
});


module.exports = router;