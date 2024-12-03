import React,{useEffect, useRef}from 'react'
import './Home.css'
import Profile_1 from "../../Asserts/ProfilePic/Profile_1.JPG";
import Resume from '../../Asserts/Resume/MageshwaranSP_Resume.pdf'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import icon from '../../Asserts/ProjectPics/icons8-up-50.png';
import Navbar from '../../Components/Navbar/Navbar'
import About from '../../Components/About/About'
import Skills from '../../Components/Skills/Skills'
import Projects from '../../Components/Projects/Projects'
import Footer from '../../Components/Footer/Footer'
import ScrollReveal from 'scrollreveal';
import Typed from 'typed.js';


const Home = () => {
  const textRef = useRef(null);
  useEffect(() => {
    ScrollReveal({ 
      distance:'100px',
      duration: 2000,
      delay: 200,
   });
   ScrollReveal().reveal('.home-content, heading', { origin: 'top' });
   ScrollReveal().reveal('.home-img,.my-skill, ,.contact', { origin: 'right' });
   ScrollReveal().reveal('.home-content h1, .about .profile', { origin: 'left' });
   ScrollReveal().reveal('.home-content p, .intro,.project-container', { origin: 'right' });

    if (textRef.current) {
      const typed = new Typed(textRef.current, {
        strings: ["Java Developer", "Front-end Developer"],
        typeSpeed: 50,
        backSpeed: 50,
        loop: true,
    });
    return () => {
        typed.destroy();
    };
    }
  }, []);
  function Scrolltop(){
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling
  });
  }
  return (
    <>
    <Navbar />
       <section class="home" id="home">
        <div class="home-content">
            <h3>Hi, I am</h3>
            <h1>Mageshwaran</h1>
            <h3>And I am a <span class="multiple-text" ref={textRef}></span></h3>
            <p>I'm a passionate web developer specializing in creating responsive and user-friendly websites. With experience in HTML, CSS, JavaScript, and React.js, I aim to bring ideas to life through creative solutions.
            </p>
            <div class="social-media">
                <a id="linkedin" href="https://www.linkedin.com/in/mageshwaran-s-p-985716240/"><FontAwesomeIcon icon={faLinkedinIn} style={{
        color: '#0077b5', // LinkedIn blue
        fontSize: '24px',
        margin: '10px',
        cursor: 'pointer',
      }} /></a>
                <a href="https://github.com/Mageshsp"><FontAwesomeIcon icon={faGithub} style={{
        color: '#0077b5', // LinkedIn blue
        fontSize: '24px',
        margin: '10px',
        cursor: 'pointer',
      }} /></a>
            </div>
            <a href={Resume} class="btn" target='_blank' rel='noopener noreferrer' >My Resume</a>
            
        </div>
        <div class="home-img">
            <img src={Profile_1} alt="profile pic"/>
        </div>
        <img src={icon} class="scroll_top" onClick={Scrolltop}/>
    </section>
    <hr></hr>
    <About />
    <hr></hr>
    <Skills />
    <hr></hr>
    <Projects />
    <hr></hr>
    <Footer/>
    </>

  )
}

export default Home