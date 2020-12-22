const express= require("express")
const router = express.Router()
const Customer=require("../models/customer")
const Car=require("../models/car")
router.post("/createCustomer",async(req,res)=>{
   try{
     let data={...req.body}
     delete data.car_id
     const customer=new Customer(data)
     console.log(req.body.car_id)
     const car=await Car.findById(req.body.car_id)
     car.customer=customer._id.toString()
     car.reserved="true"
     await customer.save()
     await car.save()
     res.send("done")
   }catch(e){
       res.status(500).send(e)
   }
})
router.get("/getcustomer/:id",async(req,res)=>{
    try{
        const customer=await Customer.findOne({
            _id:req.params.id
        })
        if(!customer){
            return res.send("not found")
        }
        res.send(customer)
    }catch(e){
        req.status(500).send(e)
    }
})
module.exports = router