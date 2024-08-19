import React from 'react'
import './work.css';
import W1 from '../../assets/php.png';
import W2 from '../../assets/ror.png';
import W3 from '../../assets/react.png'

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
                <img src={W1} alt='WebDesign' className='skillBarImg'></img>
                <div className='skillBarText'>
                    <h2>Design and deploy website with PHP and MySQL.</h2>
                    <p>Designed a cookbook entry blog that validates and sanitizes user inputs. Practice website security by implementing a login system to only allowed authorize
                      user to add and modify entries.
                    </p>
                </div>
            </div>
            <div className='skillBar'>
                <img src={W2} alt='WebDesign' className='skillBarImg'></img>
                <div className='skillBarText'>
                    <h2>Ruby on Rails</h2>
                    <p>Demonstrate ERD knowledge through Ruby on Rails project. Built an eCommerce website with cart and checkout features.</p>
                </div>
            </div>
            <div className='skillBar'>
                <img src={W3} alt='WebDesign' className='skillBarImg'></img>
                <div className='skillBarText'>
                    <h2>Built React program to showcase Storybook utility.</h2>
                    <p>Highlight the features of Storybook while implementing Eslint, Prettier and Jest Testing to Husky for code control and security when using GitHub.</p>
                </div>
            </div>
        </div>
      </section>
    </div>
  )
}

export default Works
