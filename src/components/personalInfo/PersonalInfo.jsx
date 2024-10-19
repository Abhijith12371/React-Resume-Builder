import React from 'react'
import "./PersonalInfo.css"
const PersonalInfo = (props) => {
  return (
    <div>
      <div className="city"><i class="fas fa-map-marker-alt"></i><p>{props.data.city}</p></div>
      <div className="phone"><i class="fa-solid fa-phone"></i><p>{props.data.phoneNumber}</p></div>
      <div className="email"><i class="fa-solid fa-envelope"></i><p>{props.data.email}</p></div>
      <div className="linkedin"><i class="fa-brands fa-linkedin"></i><a href={`${props.data.linkedIn}`}>Linkedin</a></div>
      <div className="portfolio"><i class="fa-solid fa-user-tie"></i><a href={`${props.data.portfolio}`}>Portfolio</a></div>
      <img className='image' src="\src\components\personalInfo\qrcode.png" alt="not found" />
    </div>
  )
}

export default PersonalInfo
