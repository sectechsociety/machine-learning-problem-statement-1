import React from 'react'
import './top.css'
import { BiSearchAlt } from "react-icons/bi"
import { TbMessageCircle } from "react-icons/tb";
import { MdOutlineNotificationsNone } from "react-icons/md";
import img from '../../../Asserts/3135715.png'
import img2 from '../../../Asserts/pexels-cottonbro-6153740-removebg-preview.png'
import video from '../../../Asserts/3191573-uhd_3840_2160_25fps.mp4'

const Activity = () => {
  return (
    <div className='topSection'>
      <div className='headerSection flex'>
        <div className='title'>
          <h1>welcome to Slytherin</h1>
          <p>
              Welcome to the <strong>Healthcare Boolean Query Generator</strong>, a tool designed to help healthcare 
              professionals and researchers quickly generate precise queries for accessing relevant medical data.
          </p>
          <p>
              Powered by AI and Natural Language Processing(NPL), our platform simplifies searching for clinical studies, 
              drug interactions, and more, ensuring you find the information you need efficiently.
           </p>
        </div>        
      </div>

      <div className='CardSection flex'>
        <div className='rightCard flex'>
          <h1> need help use my platform</h1>
          <p>this website will make you as doctors !!!</p>

          <div className='buttons flex'>
            <button className='btn'>chart with me</button>
            <button className='btn transparent'>doctor</button>
          </div>
          <div className='videoDiv'>
            <video src={video} autoPlay loop muted></video>
          </div>
        </div>
      
        
      </div>
    </div>
  )
}

export default Activity




 {/*<div className='sideBarcard'>
              <IoMdSpeedometer className='icon'/>
                <div className='cardcontent'>
                  <div className='circle1'></div>
                  <div className='circle2'></div>

                  <h3>help center</h3>
                  <button className='btn'>
                  go to help center
                  </button>
                </div>
              </div>*/}