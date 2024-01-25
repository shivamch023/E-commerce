import React from 'react'
import './NewsLetter.css'

export const NewsLetter = () => {
  return (
    <div className='newsletter'>
        <h1>Get Exculisive Offer On Your Email</h1>
        <p>Subscribe to our newsletter and stay Upadted</p>
        <div>
            <input type="email" placeholder='Your Email id' />
            <button>Subscribe</button>
        </div>
    </div>
  )
}
export default NewsLetter;
