import React from 'react'
import './About.css'
import Profile_2 from '../../Asserts/ProfilePic/Profile_2.JPG';
const About = () => {
  return (
    <>
    <h2 class="heading_about">About<span>Me</span></h2>
    <section class="about" id="about">
        <div class="profile">
            <img src={Profile_2} alt="profile photo"/>
        </div>
        <div class="intro">
            <p> I am dedicated and enthusiastic Web Developer who enjoys creating clean, responsive websites and applications. My focus is on building dynamic user interfaces using technologies like HTML, CSS, JavaScript, and React. I thrive on solving complex problems and continuously learning new skills. In my spare time, I enjoy experimenting with new web development frameworks and contributing to open-source projects.</p>

        </div>
    </section>
    </>
  )
}

export default About