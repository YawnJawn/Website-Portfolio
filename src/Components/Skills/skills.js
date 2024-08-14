import React from 'react';
import './skills.css';
import Work1 from '../../assets/Work-1.png'
import Work2 from '../../assets/Work-2.png'
import Work3 from '../../assets/Work-3.png'
import Work4 from '../../assets/Work-4.jpg'

const Skills = () => {
  return (
    <section id="skills">
        <h2 className='skillsTitle'>My Skills</h2>
        <span className='skillsDescription'>I enjoy creating website that invovle user interaction and database</span>
        <div className='skillsImgs'>
            <img src={Work1} alt='' className='skillsImg'></img>
            <img src={Work2} alt='' className='skillsImg'></img>
            <img src={Work3} alt='' className='skillsImg'></img>
            <img src={Work4} alt='' className='skillsImg'></img>
            <img src='' alt='' className='skillsImg'></img>
            <img src='' alt='' className='skillsImg'></img>
        </div>
    </section>
  )
}

export default Skills
