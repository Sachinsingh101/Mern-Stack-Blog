import mongoose from "mongoose";

const connection= async (DATABASE_URL)=>{
    try{
        const DB={
            dbname:"Blog"
        }
        mongoose.connect(`mongodb://localhost:27017`,DB);
        console.log('database connected successfully');
    }catch(err){
        console.log("error while connecting to database",err);
    }
}

export default connection;
