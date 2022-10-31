import {useState} from 'react'
import { useParams ,useNavigate } from 'react-router-dom';
import axios from 'axios';

function Delete(){
    const [blog,setdelete]=useState({
       username:""
    })
    function deleteHandler(e){
        setdelete({
            username:e.target.value
        })
    }
    const navigate=useNavigate();
    const param=useParams();
    const paramid=param.id;
    console.log(paramid);
    function submitHandler(e){
        e.preventDefault();
        const deletedata={
            username:blog.username,
            paramid:paramid
        }
        try{
            
            axios.post("http://localhost:5000/remove",deletedata);
        }catch(err){
            console.log("error while deleting user ");
        }
        alert("post deleted successfully");
        navigate('/home');
    }
    return(
        <>
         <div className="container mt-5 ">
            <div className="row ">
                <div className="col-11 col-md-8 m-auto">
                    <form className="" onSubmit={submitHandler}>
                      <h3>Notice</h3>
                      <p className="text-danger">The blog once deleted cannot be recycle again be cautious</p>
                      <input type="text" placeholder="Enter your username" className="form-control" onChange={deleteHandler}></input>
                      <input type="submit" value="Delete" className="btn btn-danger form-control mt-3" required></input>                     
                   </form>
                </div>
            </div>
         </div>
        </>
    );
}
export default Delete;