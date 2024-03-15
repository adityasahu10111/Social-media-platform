import express from 'express';
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import router from './routes/user.route.js';
import authrouter from './routes/auth.route.js'





dotenv.config()
mongoose.connect(process.env.Mongo)
.then(()=>{
    console.log("connected with mongoose")
}).catch((err)=>{
    console.log(err)
})
const app = express();
app.use(express.json());


app.listen(3000, () => {
  console.log('Server is running on port 3000!');
});

app.get("/abt",(req,res)=>{
    res.send("hi there")
})

app.use("/api/user",router)
app.use("/api/auth",authrouter)

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});


