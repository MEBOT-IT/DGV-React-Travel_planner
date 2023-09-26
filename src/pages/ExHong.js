import React from 'react'
import Hongkong from '../components/Hongkong'
import HongkongSlider from '../components/Hongkongslider'
import StickyNavbar from "../components/StickyNavbar";
// import HongkongFlip from '../components/Hongkongflip'
import TravelBookingForm from '../components/TravelBookingForm';
const ExHong = () => {
  return (
    <div>
      <StickyNavbar/>
        <HongkongSlider/>
        {/* <HongkongFlip/> */}
        <TravelBookingForm/>
        <Hongkong/>
        
    </div>
  )
}

export default ExHong