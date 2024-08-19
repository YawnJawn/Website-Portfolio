import React from 'react';
import './skills.css';
import Work1 from '../../assets/Work-1.png'
import Work2 from '../../assets/Work-2.png'
import Work3 from '../../assets/Work-3.png'
import Work4 from '../../assets/Work-4.jpg'
import Work5 from '../../assets/Work-5.png'
import Work6 from '../../assets/Work-6.png'

const Skills = () => {
  return (
    <section id="skills">
        <h2 className='skillsTitle'>My Skills</h2>
        <span className='skillsDescription'>I enjoy creating website that invovle user interaction and database. Below are some pictures of some of the work
          I have done throughout my program which include Shopping cart/Checkout validation with JS, Security testing with brute force, OOP, a food blog using
          PHP for user validation and sign ups, and API testing with local facilities in my province.
        </span>
        <div className='skillsImgs'>
            <a href="https://ibb.co/x5Xmy9z" target="_blank" rel="noreferrer"><img src={Work1} alt='' className='skillsImg'></img></a>
            <a href='https://ibb.co/5cYHs30' target='_blank' rel="noreferrer"><img src={Work2} alt='' className='skillsImg'></img></a>
            <a href="https://ibb.co/6DVrLLZ" target="_blank" rel="noreferrer"><img src={Work3} alt='' className='skillsImg'></img></a>
            <a href='https://ibb.co/XtDFC7t' target='_blank' rel="noreferrer"><img src={Work4} alt='' className='skillsImg'></img></a>
            <a href='https://ibb.co/g3Jq8Sm' target='_blank' rel="noreferrer"><img src={Work5} alt='blog' className='skillsImg'></img></a>
            <a href='https://ibb.co/Wfrf7pK' target='_blank' rel="noreferrer"><img src={Work6} alt='api' className='skillsImg'></img></a>
        </div>
    </section>
  )
}

export default Skills
