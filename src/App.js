import React from 'react'
import './App.css';
import AllRoutes from './Components/AllRoutes';
import Login from './Components/Login';
import Navbar from './Components/Navbar';
import Signup from './Components/Signup';
import Mens from './Pages/Mens';
import ProductDetails from './Pages/ProductDetails';


function App() {
  return (
    <div className="App">
      <AllRoutes/>
      {/* <Mens/> */}
      {/* <Navbar/> */}
      {/* <ProductDetails/> */}
      {/* <Login/> */}
      {/* <Signup/> */}
    </div>
  );
}

export default App;
