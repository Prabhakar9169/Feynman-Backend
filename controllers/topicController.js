import Topic from '../model/topicModel.js'

const createTopic = async(req , res , next)=>{
    try{
        const {title , description , name , percentage} = req.body
            const topic = await Topic.create({
                title, 
                description,
                name,
                percentage
            })
            res.status(201).json({
                status:"success",
                topic
            })
        }
        
    catch(err){
        res.status(400).json({
            status:"failure",
           
        })
    }
}


const getTopic = async(req , res , next)=>{
    try{
        const topic = await Topic.find()
        res.status(200).send(
           topic
        )
    }catch(err){
        res.status(400).json({
            status:"failure",
        })
    }
}

export {createTopic , getTopic}