import React, { useState, Fragment} from 'react';
import './Days.scss';
import Book from './Book';
import pt01 from './assets/pt01.png';
import tick from './assets/tick.png';
import cross from './assets/cross02.png';
import coffee from './assets/coffee.png';
import gym from './assets/gym02.png';

export default function Days({ handleDays }) {
  const [stateString, setString] = useState('days');
  const handleBook = () => {
    stateString === 'days' ? setString('book') : setString('days');
  }
  return (
    <Fragment>
      {stateString === 'days' ? <div className='DaysGroup'>
        <div className='TrainerCardDays'>
            <img src={pt01} alt='personal trainer' />
            <div className='Home' onClick={handleDays}>
              <img src={gym} alt='home button' />
            </div>
            <div className='DayCardInfo'>
              <h1>Kate</h1>
              <h1 id='daysinfo'>3 days available</h1>
            </div>
          </div>
          <div className='WeekGroup'>
            <div className='Day' onClick={handleBook}>
              <h1>Monday</h1>
              <img src={tick} alt='available sign' />
            </div>
            <div className='Day'>
              <h1>Tuesday</h1>
              <img src={tick} alt='available sign' />
            </div>
            <div className='Day'>
              <h1>Wednesday</h1>
              <img src={tick} alt='available sign' />
            </div>
            <div className='Day'>
              <h1>Thursday</h1>
              <img src={cross} alt='unavailable sign' />
            </div>
            <div className='Day'>
              <h1>Friday</h1>
              <img src={coffee} alt='rest sign' />
            </div>
          </div>
      </div> : ''}
      {stateString === 'book' ? <Book handleBook={handleBook} /> : ''}
    </Fragment>
  )
}
