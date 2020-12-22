const mongoose=require("mongoose")
const customerSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    DLNumber:{
        type:String,
        required:true
    },
    phoneNo:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    start:{
        type:Date
    },
    end:{
        type:Date
    }
})

const Customer=mongoose.model("customer",customerSchema)
module.exports=Customer