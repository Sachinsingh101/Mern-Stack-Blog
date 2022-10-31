import express from "express";
import { postModel } from "../connectDB/model.js";
const router=express.Router();
import {Signupcontroller,validateData , Getpost , removeHandler} from '../Controllers/Allcontroller.js'
import upload from './multerconfig.js'

router.all('/signup',Signupcontroller);
router.post('/validate',validateData);
router.get('/getposts',Getpost);


router.post('/postblog',upload.single("NAME"),  (req,res)=>{
    try{
        
        const imgurl=req.file.filename;
        const interest=req.body.interest;
        const designation=req.body.interest;
        const username=req.body.username;
        const thought=req.body.thought;
        const postdata={
            imgurl,interest,designation,username,thought
        }
         const post=  new postModel(postdata);
         post.save();
         console.log(post);
         res.send(imgurl);
        }catch(err){
        console.log("error while posting data",err);
       }
    }
);

router.all('/remove/',removeHandler);




export default router;