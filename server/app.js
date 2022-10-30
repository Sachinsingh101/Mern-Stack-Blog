import express from 'express'
import  cors from 'cors'
import bodyParser from 'body-parser';
import router from './Routes/Allroutes.js';
import connection from './connectDB/connection.js';
import './connectDB/model.js'
const app=express();
app.use(cors());
app.use(bodyParser.urlencoded({
    extended:true
}))
app.use(bodyParser.json())
const port=process.env.PORT || '5000'
const DATABASE_URL=process.env.DATABASE_URL

app.get('/demo',(req,res)=>{
    res.send("hello");
})

app.use('/',router);


connection(DATABASE_URL);
app.listen(port,()=>{
    console.log("app is listening to port 5000");
})

