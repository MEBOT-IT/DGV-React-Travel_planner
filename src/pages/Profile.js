import React from 'react'
import ProfileIcon from '../components/ProfileIcon'
import StickyNavbar from '../components/StickyNavbar'
// import imgpro from "../images/profile.jpg";

const Profile = () => {
  return (
    <div>
      <StickyNavbar/>
      
      {/* <img src={imgpro} id="bgimggg" /> */}
      <ProfileIcon/>
    </div>
  )
}

export default Profile
