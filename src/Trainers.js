import React, { useState, Fragment } from 'react';
import './Trainers.scss';
import Days from './Days';
import pt01 from './assets/pt01.png';
import pt02 from './assets/pt02.png';
import pt03 from './assets/pt03.png';

export default function Trainers() {
  const [stateString, setString] = useState('trainers');
  const handleDays = () => {
    stateString === 'trainers' ? setString('days') : setString('trainers');
  }
  return (
    <Fragment> 
    {stateString === 'trainers' ? <div className='TrainersGroup'>
      <h1 className='title'>Choose a trainer</h1>
      <div className='CardGroup'>
        <div className='TrainerCard'>
          <img src={pt01} alt='personal trainer' />
          <div className='CardInfo'>
            <h1>Kate</h1>
            <button onClick={handleDays}>Select</button>
          </div>
        </div>
        <div className='TrainerCard'>
          <img src={pt02} alt='personal trainer' />
          <div className='CardInfo'>
            <h1>Sue</h1>
            <button>Select</button>
          </div>
        </div>
        <div className='TrainerCard'>
          <img src={pt03} alt='personal trainer' />
          <div className='CardInfo'>
            <h1>Lucy</h1>
            <button>Select</button>
          </div>
        </div>
      </div>
    </div> : ''}
    {stateString === 'days' ? <Days handleDays={handleDays} /> : ''}
    </Fragment>
  )
}
