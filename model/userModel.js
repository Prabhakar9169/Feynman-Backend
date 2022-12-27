import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique :[true, "User Already Exists"] ,
        index : true
    }
})



const User = mongoose.model('user' , userSchema)


export default User