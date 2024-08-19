import './resource.css'
import React from 'react'
import Bro from '../../assets/Bro.jpg'
import Free from '../../assets/free.jpg'
import Tim from '../../assets/tim.jpg'

const Resource = () => {
  return (
    <section id='resource'> 
      <h1>Resources</h1>
      <h3>Some of the resources I have used along in my projects are:</h3>
      <div className='sources'>
        <div className='source'>
            <h4>Bro Code</h4>
            <a href='https://www.youtube.com/@BroCodez'><img src={Bro} alt='logo' className='image'></img></a>
            <p>An overall good source for any beginner learning PHP, Java Script, React, Databases, etc...</p>
        </div>
        <div className='source'>
            <h4>freeCodeCamp</h4>
            <a href='https://www.youtube.com/@freecodecamp'><img src={Free} alt='logo' className='image'></img></a>
            <p>Provides  good intro tutorials on how to get started with Ruby on Rails on Windows.</p>
        </div>
        <div className='source'>
            <h4>Tech With Tim</h4>
            <a href='https://www.youtube.com/@TechWithTim'><img src={Tim} alt='logo' className='image'></img></a>
            <p>Focuses on deploying python based applications and basic tutorials such as setting up virtual environments and API rendering.</p>
        </div>
      </div>
    </section>
  )
}

export default Resource
