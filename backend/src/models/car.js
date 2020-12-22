const mongoose=require("mongoose")
const carSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    type:{
       type:String,
       required:true
    },
    company:{
        type:String,
        required:true,
    },
    cost:{
        type:Number,
        required:true
    },
    engineType:{
        type:String,
        required:true
    },
    fuel:{
        type:String,
        required:true
    },
    reserved:{
      type:String
    },
    image:{
        type: Buffer,
        required: true,
    },
    customer:{
        type:String
    }
})

const Car=mongoose.model("car",carSchema)
module.exports=Car