import React from 'react'
import '../Styles/Home.css';
import Pen from '../Images/pension.jpg';
export default function Home() {
  return (<>

    <div className='container'>
      <div className='grid grid-two-colums'>
        <div className='home-data'>
          <h1>Welcome to</h1>
          <h1>Pension Management App</h1>
          <p>
            This is DotNetFramwork App.
          </p>
        </div>
        <div className='img'>
          <figure>
            <img src={Pen} alt='home-img' className='img-style/'></img>
          </figure>
        </div>
      </div>

    </div>
  </>
  )
}
