import User from '../model/userModel.js'



const createUser = (req , res , next)=>{
    try{
        const users =req.body
        User.findOne({name : users.name}, async(err , existing)=>{
        if(existing == null){
            const user = await User.create(users)
            res.status(201).json({
                status:"success",
                user
            })
        }else{
            res.json(null)
        }
        })
        
    }catch(err){
        res.status(400).json({
            status:"failure",
            message :"User Already Exists"
        })
    }
}

const getUser = async(req , res , next)=>{
    try{
        const user = await User.find()
        res.status(200).send(
            user
        )
    }catch(err){
        res.status(400).json({
            status:"failure",
        })
    }
}
export {createUser , getUser}