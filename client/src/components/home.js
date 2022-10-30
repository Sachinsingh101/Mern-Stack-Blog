import axios from "axios";
import {useState,useEffect} from 'react'
import {Link} from 'react-router-dom'



function Home(){
    const [blog,setpost]=useState({
      posts:[]
    })
    useEffect(function(){
      try{
        axios.get("http://localhost:5000/getposts").then(res=>{
          const allposts=res.data;
          setpost({
            posts:allposts
          })
          console.log(allposts);
        });
      }catch(err){
        console.log("error while getting posts");
      }
    },[])
    
    return(
        <>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-9 col-11">
                {
                  blog.posts.reverse().map(function(value,i){
                    return <div className="container text-center mt-5">
                      <div className="row bg-primary rounded">
                        <img></img>
                        {/* <div>{value.imgurl}</div> */}
                        <div className="text-end"><span><i className="fa-solid fa-trash "></i></span><span><i className="fa-solid fa-pen-to-square ms-2"></i></span></div>
                        <div className="text-start text-dark"><span className="h6 text-dark">Written By:-</span>{value.username} </div>
                        <div className="text-start"><span className="h6">Topic covered:-</span>{value.interest}</div>
                        <div className="text-start"><span className="h6">Designation:-</span>{value.designation}</div>
                        <div className="text-start text-dark">{value.thought}</div>
                      </div>
                      <br/>
                    </div>
                  })
                }
              </div>
            </div>
          </div>
        </>
    );
}
export default Home;