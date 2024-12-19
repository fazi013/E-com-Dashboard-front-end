import Nav from './components/nav';
import './App.css';
import { BrowserRouter ,Route,Routes} from 'react-router-dom';
import Footer from './components/footer';
import Signup from './components/Signup';
import PrivateRoutes from './components/PrivateRoutes';
import Login from './components/Login';
import Addproduct from './components/Addproduct';
function App() {
  return (
    <div >
      
      <BrowserRouter>
      <Nav></Nav>
      <Routes>
        <Route element={<PrivateRoutes/>}>
      <Route path='/profile' element={<h1>Faisal ammad ud din</h1>}></Route>
      <Route path='/' element={<h1>This is home page </h1>}></Route>
      <Route path='/add' element={<Addproduct/>}></Route>
      <Route path='/update' element={<h1>Update your Products</h1>}></Route>
      <Route path='/products' element={<h1>list of Products</h1>}></Route>
      <Route path='/logout' element={<h1>logout to add new accounts</h1>}></Route>

      </Route>
      <Route path='/signup' element={<Signup/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      </Routes>
      
      </BrowserRouter>
      
      
    <Footer/>
    </div>
    
  );
}

export default App;
