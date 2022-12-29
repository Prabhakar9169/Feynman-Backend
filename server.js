import mongoose from "mongoose"
import app from './app.js'

const Port = 8000 || process.env.Port


 mongoose.connect("mongodb+srv://user:1234@cluster0.oh3lyto.mongodb.net/ParaBox?retryWrites=true&w=majority").then(conn=>{
    console.log(conn.connection);
 })

app.listen(Port ,()=>{
    console.log(`Server listening to ${Port}`)
})