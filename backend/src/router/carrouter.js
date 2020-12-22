const express= require("express")
const router = express.Router()
const Car=require("../models/car")
const multer = require("multer")
const sharp = require("sharp")
router.get("/unreserved",async(req,res)=>{
    try{
       const unreserved= await Car.find({
           reserved:"false"
       })
         res.send(unreserved)
    }catch(e){
          res.status(404).send(e)
    }
})
router.get("/reserved",async(req,res)=>{
    try{
       const reserved= await Car.find({
           reserved:"true"
       })
         res.send(reserved)
    }catch(e){
          res.status(404).send(e)
    }
})
const im = multer({
    fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(png|jpg|jpeg)$/)) {
            return cb(new Error("upload only images"))
        }
        cb(undefined, true)
    }
})
router.post("/createcar",im.single("imag"),async(req,res)=>{
    try{  
          const buffer = await sharp(req.file.buffer).resize(150, 150).png().toBuffer()
          const m = JSON.parse(req.body.text)
          console.log(req.text)
          const car=new Car({
              ...m,
              reserved:"false",
              image:buffer
          })
          await car.save()
          res.send("created")
    }catch(e){
         res.status(500).send(e)
    }
})
module.exports=router