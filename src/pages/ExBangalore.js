import React from 'react'
import Bang from '../components/Bangaloreslider'
import Trail from '../components/Trial'
import TravelBookingForm from '../components/TravelBookingForm'
import StickyNavbar from "../components/StickyNavbar";
const ExBangalore = () => {
  return (
    <div>
      <StickyNavbar/>
      <Bang/>
      <TravelBookingForm/>
      <Trail/>
    </div>
  )
}

export default ExBangalore
