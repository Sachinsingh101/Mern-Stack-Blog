import React,{useState} from 'react'
import axios from 'axios'
import {Link , useNavigate} from 'react-router-dom'

function Signup(){
    const [user,setuser] = useState({
      name:"",
      email:"",
      username:"",
      password:""
    })
    function handleChangle1(e){setuser({...user,name:e.target.value})}
    function handleChangle2(e){setuser({...user,email:e.target.value})}
    function handleChangle3(e){setuser({...user,username:e.target.value})}
    function handleChangle4(e){setuser({...user,password:e.target.value})}
    
    let navigate=useNavigate();

    function submitHandler(e){
      e.preventDefault();
      const userdata={
        name:user.name,
        email:user.email,
        username:user.username,
        password:user.password
      }
      try{
        axios.post("http://localhost:5000/signup",userdata);
        console.log("user data posted successfully");
        navigate('/home')
      }catch(err){
        console.log("error while signup user ",err);
      }
      setuser({
        name:"",
        email:"",
        username:"",
        password:""
      })
      
    }
     
    return(
        <>
          <div className="container mt-5 text-center">
            <div className="row justify-content-center">
              <div className='col-md-8 col-11'>
                <form className="mt-2 bg-light bg-gradient shadow p-3" onSubmit={submitHandler}>
                  <h1>Mern Blog</h1> 
                  <input type="text" className="form-control" placeholder="Enter your name" required value={user.name} onChange={handleChangle1}></input>
                  <input type="email" className="form-control mt-4" placeholder="Enter your email" required value={user.email} onChange={handleChangle2}></input>
                  <input type="text" className="form-control mt-4" placeholder="Enter your username" required value={user.username} onChange={handleChangle3}></input>
                  <input type="text" className="form-control mt-4" placeholder="Enter your password" required value={user.password} onChange={handleChangle4}></input>
                  <input type="submit" value="SignUp" className="btn btn-success form-control mt-4"></input>
                  <h4 className="text-muted mt-4">OR</h4>
                  <Link to="/" className="btn btn-outline-secondary form-control mt-4">SignIn</Link>

                </form>
              </div>
            </div>
          </div>
        </>
    );
}
export default Signup;