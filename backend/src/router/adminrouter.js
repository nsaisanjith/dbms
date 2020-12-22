const express= require("express")
const bcrypt = require("bcrypt")
const { findOne } = require("../models/admin")
const router = express.Router()
const Admin=require("../models/admin")
router.post("/admincreate", async (req,res)=>{
    try{
        const admin = new Admin(req.body)
        await admin.save()
        res.send("done")
    }catch(e){
        res.status(500).send(e)
    }
})
router.post("/login",async(req,res)=>{
    try{
        const admin = await Admin.findOne({
            email:req.body.email
        })
        if(!admin){
          return  res.status(404).send("not found")
        }
        if(admin.password!=req.body.password){
            return  res.status(404).send("incorrect password")
        }
        res.send("logedIn")
    }catch(e){
        res.status(500).send(e)
    }
})
module.exports=router