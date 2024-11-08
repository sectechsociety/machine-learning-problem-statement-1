import React from 'react'
import './sidebar.css'
import { IoMdSpeedometer } from "react-icons/io";
import { GiHealthNormal } from "react-icons/gi";
import { CiLogout } from "react-icons/ci";
import { Link } from "react-router-dom";
import Animate from '../animation/Animate'

const Sidebar = () => {
  return (
    <div className='sideBar grid'>
      <div className="logoDiv Flex">
      <Animate/>
      <h2>virus</h2>
      </div>
      <div className='menudiv'>
      <h3 className='divtitle'>
      QUICK MENU
      </h3>
        <ul className='menuList grid'>
          <li className='listItem'>
          <Link to='/' className='menuLink flex'>
          <span className='smallText'><IoMdSpeedometer className='icon'/></span>Home</Link>
          </li> 
          <li className='listItem'>
          <Link to='/History' className='menuLink flex'>
          <span className='smallText'><IoMdSpeedometer className='icon'/></span>History</Link>
          </li> 
          <li className='listItem'>
            <a href='' className='menuLink flex'>
            <GiHealthNormal className='icon'/>
            <span className='smallText'>
              chatbot
            </span>
            </a>
          </li>
          <li className='listItem'>
            <a href='' className='menuLink flex'>
            <IoMdSpeedometer className='icon'/>
            <span className='smallText'>
              profile
            </span>
            </a>
          </li>
          <li className='listItem'>
            <a href='' className='menuLink flex'>
            <IoMdSpeedometer className='icon'/>
            <span className='smallText'>
              maps
            </span>
            </a>
          </li>
          <li className='listItem'>
            <a href='' className='menuLink flex'>
            <IoMdSpeedometer className='icon'/>
            <span className='smallText'>
              apponitments
            </span>
            </a>
          </li>
        </ul>
      </div>
      
      </div>
    
  )
}

export default Sidebar