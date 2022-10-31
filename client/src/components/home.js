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
          console.log(allposts);
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
              <div className="col-md-10 col-11">
                {
                  blog.posts.reverse().map(function(value,i){
                    return <div className="container text-center mt-5">
                      <div className="row bg-secondary rounded">
                        <img></img>
                        <img src={`http://localhost:5000/${value.imgurl}` } className="m-auto pt-5" id="images"></img>
                        <div className="text-end"><span><Link to={`/delete/${value._id}`}><i className="fa-solid fa-trash text-dark"></i></Link></span><span><Link><i className="fa-solid fa-pen-to-square ms-2 text-dark"></i></Link></span></div>
                        <div className="text-start text-dark h6"><span className="h6 text-dark">Written By:-</span>{value.username} </div>
                        <div className="text-start h6"><span className="h6">Topic covered:-</span>{value.interest}</div>
                        <div className="text-start h6"><span className="h6">Designation:-</span>{value.designation}</div>
                        <div className="text-start text-dark pb-5">{value.thought}</div>
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