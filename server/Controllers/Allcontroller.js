import {userModel,postModel} from "../connectDB/model.js";


const Signupcontroller=(req,res)=>{
    const userdata=req.body;
    res.send("hello");
    try{
        const Signup= new userModel(userdata);
        Signup.save();
        console.log("User registered successfully");
    }catch(Err){
        console.log("Error while registering user",Err);
    }

}
const validateData = async (req,res)=>{
    const username=req.body.username;
    const pass=req.body.password;
    try{
        const userdata= await userModel.findOne({username:username,password:pass});
        if (userdata==null){
            const demouser=({
                username:"",
                password:""
            })
            res.json(demouser);
        }else{
            res.json(userdata);
        }
    }catch(err){
        console.log("error while validating user",err);
    }
}
// const postblog= (req,res)=>{
//     const username=req.body.username;
//     const interest=req.body.interest;
//     const designation=req.body.designation;
//     const imgurl=req.file.filename;
//     const thought=req.body.thought;
//    const postdata={
//     username,interest,designation,imgurl,thought
//    }

//    try{
//      const post= new postModel(postdata);
//      post.save();
//      console.log(post);
//    }catch(err){
//     console.log("error while posting data",err);
//    }
// }
const Getpost= async (req,res)=>{
    try{
        const allpost= await postModel.find();
        res.json(allpost);
        console.log("posts fetched successfully");
        // console.log(allpost);
    }catch(err){
        console.log("error while fetching posts",err);
    }
}

const removeHandler= async (req,res)=>{
    try{
        const user=await userModel.find({username:req.body.username});
        const signupuser=user[1].username;
        if(signupuser==req.body.username){
           await postModel.findByIdAndDelete(req.body.paramid);
           console.log("deleted");
        }else{
            console.log("error while deleting user");
        }
    }catch(err){
        console.log(err);
    }
}
export {Signupcontroller,validateData ,Getpost , removeHandler}
