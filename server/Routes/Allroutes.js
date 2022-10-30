import express from "express";
import { postModel } from "../connectDB/model.js";
const router=express.Router();
import {Signupcontroller,validateData , Getpost} from '../Controllers/Allcontroller.js'
import multer from "multer";
// import path from "path";

const upload=multer({
        Storage:multer.diskStorage({
        designation:function(req,file,cb){
            cb(null,"public");
        },
        filename:function(req,file,cb){
            cb(null,file.originalname="-"+Date.now()+ ",jpg");
        }    
    })
}).single("imgurl")






 
router.all('/signup',Signupcontroller);
router.post('/validate',validateData);
router.post('/postblog',upload ,(req,res)=>{
        console.log(req.body);
        const username=req.body.username;
        const interest=req.body.interest;
        const designation=req.body.designation;
        // const imgurl=req.file.originalname; 
        const thought=req.body.thought;
        const postdata={
            username,interest,designation,thought
        }
        // console.log(imgurl);
       
    
       try{
         const post= new postModel(postdata);
         post.save();
         console.log(post);
        //  res.send(imgurl);
        }catch(err){
        console.log("error while posting data",err);
       }
    }
);
router.get('/getposts',Getpost);

export default router;