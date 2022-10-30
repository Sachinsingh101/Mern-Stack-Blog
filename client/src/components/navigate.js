
import {Link} from 'react-router-dom'

function Navigation(){
    return(
        <>
         <nav className="navbar navbar-expand-lg bg-dark ">
           <div className="container-fluid text-center">
             <h1 className="navbar-brand text-white" href="#">Mern Blog</h1>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                 <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                   <li className="nav-item">
                      <Link to="/home" className="nav-link active text-white" aria-current="page" href="#">Home</Link>
                   </li>
                   <li className="nav-item">
                      <Link className="nav-link text-white" href="#">About</Link>
                   </li>
                   <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Write
                       </a>
                      <ul className="dropdown-menu">
                        <li><Link to='writeblog' className="dropdown-item " >Write a Blog</Link></li>
                        <li><Link className="dropdown-item " >Ask Your Doubt</Link></li>
                        <li><Link className="dropdown-item " >Answer a Question</Link></li>
                        <li><Link className="dropdown-item " >Write to us</Link></li>
                      </ul>
                    </li>
                    <li className="nav-item">
                       <Link className="nav-link text-white">Trending</Link>
                    </li>
                  </ul>
                  <form className="d-flex" role="search">
                      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                      <button className="btn btn-outline-success text-white" type="submit">Search</button>
                   </form>
                </div>
            </div>
          </nav>
        </>
    );
}
export default Navigation;