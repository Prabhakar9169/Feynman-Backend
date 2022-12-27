import mongoose from "mongoose";

const topicSchema = new mongoose.Schema({
    name:{
        type:String,
    },
    
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    percentage:{
        type:Number,
        required:true,
    }
})



const Topic = mongoose.model('topic' , topicSchema)


export default Topic