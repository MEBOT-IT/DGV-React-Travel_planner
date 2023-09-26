import React from 'react'
import Dareeling from '../components/Darjeeling'
import Darjeelingslider from '../components/Darjeelingslider'
import StickyNavbar from "../components/StickyNavbar";
import TravelBookingForm from '../components/TravelBookingForm'
const ExDarjeling = () => {
  return (
    <div>
      <StickyNavbar/>
        <Darjeelingslider/>
        <TravelBookingForm/>
        <Dareeling/>
        
    </div>
  )
}

export default ExDarjeling