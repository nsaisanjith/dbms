const mongoose=require("mongoose")
const bcrypt = require("bcrypt")
const adminSchema=new mongoose.Schema({
    Ssn:{
        type:String,
        required:true
    },name:{
        type:String,
        required:true
    },password:{
        type:String,
        required:true
    },
    age:{
        type:Number,
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
    }
})
const Admin=mongoose.model("admin",adminSchema)
adminSchema.pre("save",async function(next){
    if(this.isModified("password")){
        this.password=await bcrypt.hash(this.password,8)
    }
    next()

})


module.exports=Admin