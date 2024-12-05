import Nav from './components/nav';
import './App.css';
import { BrowserRouter ,Route,Routes} from 'react-router-dom';
import Footer from './components/footer';
import Signup from './components/Signup';
function App() {
  return (
    <div className='app'>
      <div className='appcontent'>
      <BrowserRouter>
      <Nav></Nav>
      <Routes>
      <Route path='/profile' element={<h1>Faisal ammad ud din</h1>}></Route>
      <Route path='/' element={<h1>This is home page </h1>}></Route>
      <Route path='/add' element={<h1>add your products</h1>}></Route>
      <Route path='/update' element={<h1>Update your Products</h1>}></Route>
      <Route path='/products' element={<h1>list of Products</h1>}></Route>
      <Route path='/logout' element={<h1>logout to add new accounts</h1>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>

      </Routes>
      
      </BrowserRouter>
      </div>
      
    <Footer/>
    </div>
    
  );
}

export default App;
