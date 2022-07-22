import React from 'react'
import './App.css';
import AllRoutes from './Components/AllRoutes';
import Navbar from './Components/Navbar';
import Mens from './Pages/Mens';


function App() {
  return (
    <div className="App">
      {/* <AllRoutes/> */}
      <Mens/>
      {/* <Navbar/> */}
    </div>
  );
}

export default App;
