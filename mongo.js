const mongoose=require("mongoose")
mongoose.connect("mongodb+srv://newuser:userdb@cluster0.ht4q82n.mongodb.net/")
.then(()=>{
    console.log("mongodb connected");
})
.catch(()=>{
    console.log('failed');
})


const newSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const usersauth = mongoose.model("collection",newSchema)

module.exports=usersauth
