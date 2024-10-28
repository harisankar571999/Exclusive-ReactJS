
import './App.css';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from './Components/Screens/Main-Component/Home';
import AllProducts from './Components/Screens/Main-Component/AllProducts';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route  path="/" exact element={<Home/>} />
          <Route  path="home" exact element={<Home/>} />
          <Route  path="allproducts" exact element={<AllProducts/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
