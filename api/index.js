import express from 'express';
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import router from './routes/user.route.js';



dotenv.config()
mongoose.connect(process.env.Mongo)
.then(()=>{
    console.log("connected with mongoose")
}).catch((err)=>{
    console.log(err)
})
const app = express();

app.listen(3000, () => {
  console.log('Server is running on port 3000!');
});

app.get("/abt",(req,res)=>{
    res.send("hi there")
})

app.use("/api/user",router)

