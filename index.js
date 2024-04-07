import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoute.js'
import cors from 'cors';
import categoryRoutes from "./routes/categoryRoutes.js";
import productRoutes from './routes/productRoute.js';
import path from 'path'
//configure dotenv
dotenv.config();

//database
connectDB();

//rest api
const app = express();

//middleware
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))
app.use(express.static(path.join(__dirname,'./client/build')))
// routes

app.use('/api/v1/auth',authRoutes)
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/product", productRoutes);
app.use('*',function(req,res){
res.sendFile(path.join(__dirname,'./client/build/index.html'))
})

// app.get('/', (req,res)=> {
//     res.send('<h1>Welcome to e-commerce</h1>')
//  res.send({
//     message: ('<h1>Welcome to e-comm</h1>')
//  })
//})
const PORT=  process.env.PORT||8080;

app.listen(PORT, ()=>{
    console.log(`server running on ${PORT}`)
})





 