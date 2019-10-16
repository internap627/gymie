import React from 'react';
import './Book.scss';
import kate01 from './assets/kate01.png';
import gym from './assets/gym02.png';


export default function Book({ handleBook }) {
  return (
    <div className='BookGroup'>
      <div className='BookCard'>
        <img src={kate01} alt='female trainer' />
        <div className='Home' onClick={handleBook}>
              <img src={gym} alt='home button' />
            </div>
        <div className='CardInfo'>
            <h1>Monday</h1>
            <h1>15 Exercises</h1>
        </div>
      </div>
      <div className='Details'>
        <div className='InfoBlock'>
            <div className='Block'>
              <p>Level</p>
              <h1>Beginner</h1>
            </div>
            <div className='Block'>
              <p>Equipment</p>
              <h1>Core mat and Stepper</h1>
            </div>
            <div className='Block'>
              <p>Time</p>
              <h1>6 pm</h1>
            </div>
        </div>
        <div className='AboutBlock'>
            <p>About Kate</p>
            <h1>I have a passion for health and fitness and can help you reach your goals. 
              I focus on core training and endurance. See you soon.
            </h1>
        </div>
      </div>
      <div className='BookButton'>
        <h1>Book Now</h1>
      </div>
    </div>
  )
}
