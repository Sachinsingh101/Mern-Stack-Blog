// import logo from './logo.svg';
import {Routes,Route} from 'react-router-dom'
import Signin from './components/signin';
import Navigation from './components/navigate';
import Writeblog from './components/writeblog';
import Signup from './components/signup';
import Home from './components/home.js'
import Delete from './components/delete.js'

function App() {
  return (
    <>
      <Navigation/>
      <Routes>
        <Route path='/' element={<Signin/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/writeblog' element={<Writeblog/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route  path='/delete/:id' element={<Delete/>}></Route>
      </Routes>
      
    </>
  );
}

export default App;
