import React from 'react'
import './listing.css'
import { BsArrowRightShort } from "react-icons/bs";
import img from '../../../Asserts/ashkan-forouzani-IXSgwfBGnCg-unsplash-removebg-preview.png'


const Listing = () => {
  return (
    <div className='ListingSection'>
      <div className='heading flex'>
        <h1>listings</h1>
        <button className='btn flex'>
          see all <BsArrowRightShort className='icon'/>
        </button>
      </div>

      <div className='secContainer flex'>
        <div className='singleItem'>
          <img src={img} alt='Image Name'/>
          <h3>
            name 
          </h3>
        </div>
        <div className='singleItem'>
          <img src={img} alt='Image Name'/>
          <h3>
            name 
          </h3>
        </div>
        <div className='singleItem'>
          <img src={img} alt='Image Name'/>
          <h3>
            name 
          </h3>
        </div>
        <div className='singleItem'>
          <img src={img} alt='Image Name'/>
          <h3>
            name 
          </h3>
        </div>
        <div className='singleItem'>
          <img src={img} alt='Image Name'/>
          <h3>
            name 
          </h3>
        </div>
        <div className='singleItem'>
          <img src={img} alt='Image Name'/>
          <h3>
            name 
          </h3>
        </div>
        <div className='singleItem'>
          <img src={img} alt='Image Name'/>
          <h3>
            name 
          </h3>
        </div>
        <div className='singleItem'>
          <img src={img} alt='Image Name'/>
          <h3>
            name 
          </h3>
        </div>
        <div className='singleItem'>
          <img src={img} alt='Image Name'/>
          <h3>
            name 
          </h3>
        </div>
      </div>
    </div>
  )
}

export default Listing