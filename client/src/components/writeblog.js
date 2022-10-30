import {useState} from 'react'
import axios from 'axios'


function Writeblog(){
    const [blog,setblog]=useState({
      username:"",
      interest:"",
      designation:"",
      imgurl:"",
      thought:""
    })  
    function changeHandler1(e){
      setblog({
        ... blog,username:e.target.value
      })
    }
    function changeHandler2(e){
      setblog({
        ... blog,interest:e.target.value
      })
    }
    function changeHandler3(e){
      setblog({
        ... blog,designation:e.target.value
      })
    }
    function changeHandler4(e){
      setblog({
        ... blog,imgurl:e.target.files[0]
      })
    }
    function changeHandler5(e){
      setblog({
        ... blog,thought:e.target.value
      })
    }
    function submitHandler(e){
      e.preventDefault();
      // const blogdata={
      //   username:blog.username,
      //   interest:blog.interest,
      //   designation:blog.designation,
      //   imgurl:blog.imgurl,
      //   thought:blog.thought
      // }
      const formdata=new FormData();
      formdata.append('imgurl',blog.imgurl);
      formdata.append('username',blog.username);
      formdata.append('interest',blog.interest);
      formdata.append('designation',blog.designation);
      formdata.append('thought',blog.thought)
      
      // console.log(data);
      try{
        let config={
          method:"post",
          url:"http://localhost:5000/postblog",
          Headers:{
            "content-type":"application/json",
            "content-type":"mltipart/form-data"
          },
          data:formdata
        
        }
        axios(config);
        // setblog({
        //   username:"",
        //   interest:"Please select Your Interest",
        //   designation:"Please select your Designation",
        //   imgurl:"",
        //   thought:""
        // })
        alert("posted successfully !!!!!")
      }catch(err){
        console.log("error while posting blog",err);
      }
    }
    return(
        <>
          <div className="container mt-5" id="writeblog">
            <h1 className="text-center mb-5">Script your Blog</h1>
            <div className="row">
              <form onSubmit={submitHandler} encType="multipart/form-data">
                <input className="form-control mt-4" type="text" placeholder="Your User Name" value={blog.username} onChange={changeHandler1} required></input>
                <select name="Purpose" className='form-select mt-4' value={blog.interest} onChange={changeHandler2}>
                   <option selected value="General">Please select Your Interest</option>
                   <option value="science">Science</option>
                   <option value="Mathematics">Mathematics</option>
                   <option value="Computer science">Computer science</option>
                   <option value="Web/App development">Web/App development</option>
                </select>
                <select name="Purpose" className='form-select mt-4' value={blog.designation} onChange={changeHandler3}>
                  <option selected value="General">Please select your Designation</option>
                  <option value="Professor">Professor</option>
                  <option value="Teacher">Teacher</option>
                  <option value="Student">Student</option>
                  <option value="Learner">Other</option>
                </select>
                <input type="file" placeholder="Choose an image" className="form-control mt-3" onChange={changeHandler4}></input>
                <textarea className="form-control mt-4" height="250px" placeholder="Tell your story .." value={blog.thought} onChange={changeHandler5}></textarea>
                <input type="submit" value='Publish' className="btn btn-primary form-control mt-4 "></input>
              </form>
            </div>
          </div>
        </>
    );
}
export default Writeblog;