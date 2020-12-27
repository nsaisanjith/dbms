const express=require("express")
const app=express()
const adminrouter=require("./router/adminrouter")
const customer=require("./router/customerrouter")
const carrouter=require("./router/carrouter")
const bodyParser = require('body-parser')
require("./db/mongoose")
const cors = require("cors")
// enable CORS without external module
app.use(cors())
 // Override the default field name regex. Default: /FieldName: ([^\n]*)/

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(customer)
app.use(carrouter)
app.use(adminrouter)
app.listen(4000,()=>{
    console.log("server is running")
})