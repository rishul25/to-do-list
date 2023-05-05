const express = require("express");
const router = express.Router(); // Instance of Router in Express

const UserModel = require("../models/User");



router.get("/", async (req, res) => {
const user = await UserModel.find()

res.status(200).send(
    user
)

});

router.get("/:id", async (req, res) => {
    const user = await UserModel.findById(req.params.id)
    
    res.status(200).send(
        user
    )
    
    });
    


router.put("/:id", async (req, res) => {
    let user = await UserModel.findById(req.params.id)

    user = await UserModel.findByIdAndUpdate(req.params.id,req.body,{new:true,useFindAndModify:true,runValidator:true})

    if(!user){
        return res.status(500).send(
            {
                success:false,
                message:"Product Not Found"
            }
        )
    }

    res.status(200).send(
        user
    )
    
    });

router.delete("/:id", async (req, res) => {

        

        try{
            const user = await UserModel.findByIdAndDelete(req.params.id);
            if(!user){
                return res.status(500).send(
                    {
                        success:false,
                        message:"Product Not Found"
                    }
                )
            }

            res.status(200).send({
                message:"Product Deleted"
            })
        

        }catch(er){
            res.status(500).send(e)
        }
    
  
    
        
        
});
    


module.exports = router;
