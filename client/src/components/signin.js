import React,{useState} from 'react'
import axios from 'axios';
import {useNavigate ,Link} from 'react-router-dom'
import Writeblog from './writeblog';



function Signin(){
    const [userdata,setdata]=useState({
      username:"",
      password:""
    })
    
    
    function changeHandler1(e){
      setdata({
        ...userdata,username:e.target.value
      })
    }
    function changeHandler2(e){
      setdata({
        ...userdata,password:e.target.value
      })
    }
    let navigate=useNavigate();
    function submitHandler(e){
        e.preventDefault();
        const validate={
            username:userdata.username,
            password:userdata.password
        }
        try{
          axios.post("http://localhost:5000/validate",validate).then(res=>{
            const userdata=res.data;
            const username=userdata.username;
            const password=userdata.password;
            console.log(username);
            if(validate.username==username && validate.password==password){
              console.log("validation successfull");
              navigate('/home');
            }else{
              console.log("validatiion not success");
              alert("Please Enter Correct Credentials");
            }
          });
        }catch(err){
          console.log("validation error");
        }
    }
    return(
        <>
          <div className="container mt-5 text-center  p-3">
            <div className="row justify-content-center">
              <div className='col-md-8 col-11'>
                <form className="mt-5 shadow p-3" onSubmit={submitHandler}>
                   <h1>Mern Blog</h1>
                  <input type="text" className="form-control" placeholder="Enter your username" onChange={changeHandler1} required></input>
                  <input type="text" className="form-control mt-4" placeholder="Enter your password" onChange={changeHandler2} required></input>
                  <input type="submit" value="SignIn" className="btn btn-primary form-control mt-4"></input>
                  <div id="alert"></div>
                  <h4 className="text-muted mt-4">OR</h4>
                  <Link to="/signup" className="btn btn-outline-secondary form-control mt-4">Signup</Link>
                </form>
              </div>
            </div>
          </div>

        </>
    );
}
export default Signin;