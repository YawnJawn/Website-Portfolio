import React from 'react'
import './work.css';
import  WebDesign  from '../../assets/website-design.png';
import uiDesign from '../../assets/ui-design.png';

const Works = () => {
  return (
    <div>
      <section id ="work">
        <div className='title'> 
            <h1 className='role'>Full Stack Web Developer</h1>
            <p>Emphasize on building website with validation and database integration using PHP, MySQL, and Ruby On Rails</p>
        </div>
        <div className='skillBars'>
            <div className='skillBar'>
                <img src={WebDesign} alt='WebDesign' className='skillBarImg'></img>
                <div className='skillBarText'>
                    <h2>Website validation using PHP</h2>
                    <p>Extensive practice with user validation through form submission. Familiarity with POST and GET requests.</p>
                </div>
            </div>
            <div className='skillBar'>
                <img src={uiDesign} alt='WebDesign' className='skillBarImg'></img>
                <div className='skillBarText'>
                    <h2>Ruby on Rails</h2>
                    <p>Demonstrate ERD knowledge through Ruby on Rails project. Built an eCommerce website with cart and checkout features.</p>
                </div>
            </div>
            <div className='skillBar'>
                <img src={WebDesign} alt='WebDesign' className='skillBarImg'></img>
                <div className='skillBarText'>
                    <h2>Dummy Txt</h2>
                    <p>Dummy</p>
                </div>
            </div>
        </div>
      </section>
    </div>
  )
}

export default Works
