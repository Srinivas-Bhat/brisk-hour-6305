import React from 'react'
import BestSellers from '../Components/BestSellers';
import Candles from '../Components/Candles';
import NewArrivals from '../Components/NewArrivals';
import NewBrand from '../Components/NewBrand';
import Promotion from '../Components/Promotion';
import Swipers from '../Components/Swipers';
import Offers from '../Components/Offers';

const Home = () => {
  return (
    <div>
      <Swipers/>
      <NewArrivals/>
      <NewBrand/>
      <BestSellers/>
      <Promotion/>
      <Candles/>
      <Offers/>
      {/* <Box h="700px" border="1px solid black"></Box> */}
    </div>
  )
}

export default Home