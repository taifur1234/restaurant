import React from 'react';
import './Steps.css';

export default function Steps() {
  return (
    <div className='steps-container'>
      <div className='last-word'>
      <h1>How Table Booking</h1>
      <h1 style={{color:'#E55F60'}}>Works</h1>
      </div>
      <p className='subtitle'>----- Reserve your table in just 3 easy steps -----</p>

      <div className='steps-box'>
        {/* Step 1 */}
        <div className='step-card'>
          <div className='step-icon'>1</div>
          <img className='step-one-img' src='step-1-img.png' alt=''/>
          <h2>Choose Date & Time</h2>
          <p>Select the date and time that <br/> suits you best for your visit.</p>
        </div>

        {/* Step 2 */}
        <div className='step-card'>
          <div className='step-icon'>2</div>
          <img className='step-one-img' src='step-2-img.jpg' alt=''/>
          <h2>Select Your Table</h2>
          <p>Pick a table from our available <br/> options to reserve your spot.</p>
        </div>

        {/* Step 3 */}
        <div className='step-card'>
          <div className='step-icon'>3</div>
          <img className='step-one-img' src='step-3-imgg.jfif' alt=''/>
          <h2>Confirm Booking</h2>
          <p>Review your details and confirm <br/> your table booking instantly.</p>
        </div>
      </div>
    </div>
  );
}
