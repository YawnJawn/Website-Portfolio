import React from 'react'
import './intro.css';
import bg from '../../assets/Santa.png';

const Intro = () => {
  return (
    <section id='intro'>
        <div className='introContent'>
            <span className='hello'>Hello,</span>
            <span className='introduction'>I am <span className='introName'>Tin Tran</span><br></br>
            a new graduate from the Full Stack Web Development Program at Red River College Polytech</span>
            <p className='introP'>I am eagar to display my skills and learn</p>
        </div>
        <img src={bg} alt='profile' className='bg'></img>
    </section>
  )
}

export default Intro;
