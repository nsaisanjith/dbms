const mongoose=require("mongoose")
mongoose.connect("mongodb+srv://sanjith99:sanjith99@cluster0.jixsn.mongodb.net/photo-gallery?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useCreateIndex: true
})