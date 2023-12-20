import './App.css';
import Navbar from './component/Navbar';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import HomeScreen from './screen/HomeScreen';
function App() {
  return (
    <div className="App">
     <Navbar/>
     <HomeScreen/>
    </div>
  );
}

export default App;
