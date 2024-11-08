import React from 'react'
import './activity.css'
import user from '../../../Asserts/download.png'
const Activity = () => {
  return (
    <div className='activitySection'>
    <div className='heading flex'>
    <h1>recent</h1>
    </div>
      <div className='secContainer grid'>
        <div className='singlepatient flex'>
          <img src={user} alt="Customer Image"/>
          <div className='patientsDetails'>
            <span className='name'>
              ajay singh
            </span>
            <small>
              ordered a new planet
            </small>
            <div className='duration flex'>
            </div>
          </div>
        </div>
        <div className='singlepatient flex'>
          <img src={user} alt="Customer Image"/>
          <div className='patientsDetails'>
            <span className='name'>
              ajay singh
            </span>
            <small>
              ordered a new planet
            </small>
            <div className='duration flex'>
            </div>
          </div>
        </div>
        <div className='singlepatient flex'>
          <img src={user} alt="Customer Image"/>
          <div className='patientsDetails'>
            <span className='name'>
              ajay singh
            </span>
            <small>
              ordered a new planet
            </small>
            <div className='duration flex'>
            </div>
          </div>
        </div>
        <div className='singlepatient flex'>
          <img src={user} alt="Customer Image"/>
          <div className='patientsDetails'>
            <span className='name'>
              ajay singh
            </span>
            <small>
              ordered a new planet
            </small>
            <div className='duration flex'>
            </div>
          </div>
        </div>
        <div className='singlepatient flex'>
          <img src={user} alt="Customer Image"/>
          <div className='patientsDetails'>
            <span className='name'>
              ajay singh
            </span>
            <small>
              ordered a new planet
            </small>
            <div className='duration flex'>
            </div>
          </div>
        </div>
      </div>    
    </div>
    
  )
}

export default Activity