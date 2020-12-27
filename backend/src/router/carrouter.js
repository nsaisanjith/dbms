const express= require("express")
const router = express.Router()
const Car=require("../models/car")
const multer = require("multer")
const sharp = require("sharp")
const fs = require("fs")
const path = require('path');

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
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now())
    }
});
 
const upload = multer({ storage: storage });

router.post("/createcar",upload.single("image"), async(req,res)=>{
    try{  

          const buffer = fs.readFileSync(path.join(__dirname + '../../../uploads/' + req.file.filename))
          delete req.body.image;
          const m = req.body

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