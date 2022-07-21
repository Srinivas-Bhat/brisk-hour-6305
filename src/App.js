import { Box } from '@chakra-ui/react';
import React from 'react'
import './App.css';
import BestSellers from './Components/BestSellers';
import Candles from './Components/Candles';
import Navbar from './Components/Navbar'
import NewArrivals from './Components/NewArrivals';
import NewBrand from './Components/NewBrand';
import Promotion from './Components/Promotion';
import Swipers from './Components/Swipers';
import Footer from './Components/Footer'
import Offers from './Components/Offers';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Swipers/>
      <NewArrivals/>
      <NewBrand/>
      <BestSellers/>
      <Promotion/>
      <Candles/>
      <Offers/>
      {/* <Box h="700px" border="1px solid black"></Box> */}
      <Footer/>
    </div>
  );
}

export default App;
