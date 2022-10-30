import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    name:{type:String},
    email:{type:String},
    username:{type:String},
    password:{type:String}
})
const postblogSchema=new mongoose.Schema({
    username:{type:String},
    interest:{type:String},
    designation:{type:String},
    imgurl:{Type:String},
    thought:{type:String}
})

const userModel=mongoose.model('Blog',userSchema);
const postModel=mongoose.model('Allposts',postblogSchema);

export {userModel , postModel};