
import './App.css';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from './Components/Screens/Main-Component/Home';
import AllProducts from './Components/Screens/Main-Component/AllProducts';
import SinglePage from './Components/Screens/SinglePage';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route  path="/" exact element={<Home/>} />
          <Route  path="home" exact element={<Home/>} />
          <Route  path="allproducts" exact element={<AllProducts/>}/>
          <Route  path="product/:id" exact element={<SinglePage/>}/>
          {/* <Route  path="allproducts/product/:id" exact element={<SinglePage/>}/> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
