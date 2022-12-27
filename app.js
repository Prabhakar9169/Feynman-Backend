import express from 'express'
import userRoutes from './routes/userRoutes.js'
import topicRoutes from './routes/topicRoutes.js'
import cors from 'cors'



const app = express()



app.use(cors())
app.use(express.json())


app.use('/api/v1/user' , userRoutes )
app.use('/api/v1/topic' , topicRoutes)



export default app