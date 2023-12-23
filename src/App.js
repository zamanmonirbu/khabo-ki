import './App.css';
import Navbar from './component/Navbar';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import HomeScreen from './screen/HomeScreen';
import { Route, Routes } from 'react-router-dom';
import Cart from './screen/Cart';
import RegisterScreen from './screen/RegisterScreen';
import LoginScreen from './screen/LoginScreen';

import 'bootstrap'
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<HomeScreen />} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/register' element={<RegisterScreen/>} />
        <Route path='/login' element={<LoginScreen/>} />
        

        
      </Routes>
    </div>
  );
}

export default App;
