import React,{useEffect, useRef} from 'react'
import './App.css'
import ScrollReveal from 'scrollreveal';
import Typed from 'typed.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import Profile_1 from "./Asserts/ProfilePic/Profile_1.JPG";
import Profile_2 from './Asserts/ProfilePic/Profile_2.JPG';
import icon from './Asserts/ProjectPics/icons8-up-50.png';
import delish from './Asserts/ProjectPics/delish.png';
import techysoftware from './Asserts/ProjectPics/techySoftware.png';
import weatherapp from './Asserts/ProjectPics/weatherapp.png'


const App = () => {
  const openResume = () => {
    const Resume = 'my_portfolio\src\Asserts\Resume\MageshwaranSP_Resume.pdf'; 
    window.open(Resume);
  };
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
      new Typed(textRef.current, {
        strings: [ 'Full Stack Developer'], 
        typeSpeed: 70, 
        backSpeed: 70,  
        loop: true, 
        showCursor: false,
      });
    }
  }, []);
  function Scrolltop(){
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling
  });
  }

  return (
    <div>
      <header class="header">
        <a href="#" class="logo">My Portfolio</a>

        <i class="fa-solid fa-bars" id="menu-icon"></i>
        <nav class="navbar">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skill">Skills</a>
            <a href="#project">Projects</a>
            <a href="#contact">Contact</a>
            
        </nav>
    </header>
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
            <a href="#" class="btn" onClick={openResume}>My Resume</a>
            
        </div>
        <div class="home-img">
            <img src={Profile_1} alt="profile pic"/>
        </div>
        <img src={icon} class="scroll_top" onClick={Scrolltop}/>
    </section>
    <hr/>
    <h2 class="heading_about">About<span>Me</span></h2>
    <section class="about" id="about">
        <div class="profile">
            <img src={Profile_2} alt="profile photo"/>
        </div>
        <div class="intro">
            <p> I am dedicated and enthusiastic Web Developer who enjoys creating clean, responsive websites and applications. My focus is on building dynamic user interfaces using technologies like HTML, CSS, JavaScript, and React. I thrive on solving complex problems and continuously learning new skills. In my spare time, I enjoy experimenting with new web development frameworks and contributing to open-source projects.</p>

        </div>
    </section>
    <hr/>
    
    <section class="skill" id="skill">
        <h2 class="heading">My<span>Skills</span></h2>
        <div class="skill-box">
            <div class="my-skill"><img src="https://www.pega.com/sites/default/files/media/images/2021-10/pega-logo-vertical-positive-rgb-01.png" alt=""/></div>
            <div  class="my-skill"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                <path fill="#E65100" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"></path><path fill="#FF6D00" d="M24 8L24 39.9 35.2 36.7 37.7 8z"></path><path fill="#FFF" d="M24,25v-4h8.6l-0.7,11.5L24,35.1v-4.2l4.1-1.4l0.3-4.5H24z M32.9,17l0.3-4H24v4H32.9z"></path><path fill="#EEE" d="M24,30.9v4.2l-7.9-2.6L15.7,27h4l0.2,2.5L24,30.9z M19.1,17H24v-4h-9.1l0.7,12H24v-4h-4.6L19.1,17z"></path>
                </svg></div>
            <div  class="my-skill"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                <path fill="#0277BD" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"></path><path fill="#039BE5" d="M24 8L24 39.9 35.2 36.7 37.7 8z"></path><path fill="#FFF" d="M33.1 13L24 13 24 17 28.9 17 28.6 21 24 21 24 25 28.4 25 28.1 29.5 24 30.9 24 35.1 31.9 32.5 32.6 21 32.6 21z"></path><path fill="#EEE" d="M24,13v4h-8.9l-0.3-4H24z M19.4,21l0.2,4H24v-4H19.4z M19.8,27h-4l0.3,5.5l7.9,2.6v-4.2l-4.1-1.4L19.8,27z"></path>
                </svg></div>
            <div  class="my-skill"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                <path fill="#ffd600" d="M6,42V6h36v36H6z"></path><path fill="#000001" d="M29.538 32.947c.692 1.124 1.444 2.201 3.037 2.201 1.338 0 2.04-.665 2.04-1.585 0-1.101-.726-1.492-2.198-2.133l-.807-.344c-2.329-.988-3.878-2.226-3.878-4.841 0-2.41 1.845-4.244 4.728-4.244 2.053 0 3.528.711 4.592 2.573l-2.514 1.607c-.553-.988-1.151-1.377-2.078-1.377-.946 0-1.545.597-1.545 1.377 0 .964.6 1.354 1.985 1.951l.807.344C36.452 29.645 38 30.839 38 33.523 38 36.415 35.716 38 32.65 38c-2.999 0-4.702-1.505-5.65-3.368L29.538 32.947zM17.952 33.029c.506.906 1.275 1.603 2.381 1.603 1.058 0 1.667-.418 1.667-2.043V22h3.333v11.101c0 3.367-1.953 4.899-4.805 4.899-2.577 0-4.437-1.746-5.195-3.368L17.952 33.029z"></path>
                </svg></div>
            <div  class="my-skill"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                <path fill="#F44336" d="M23.65,24.898c-0.998-1.609-1.722-2.943-2.725-5.455C19.229,15.2,31.24,11.366,26.37,3.999c2.111,5.089-7.577,8.235-8.477,12.473C17.07,20.37,23.645,24.898,23.65,24.898z"></path><path fill="#F44336" d="M23.878,17.27c-0.192,2.516,2.229,3.857,2.299,5.695c0.056,1.496-1.447,2.743-1.447,2.743s2.728-0.536,3.579-2.818c0.945-2.534-1.834-4.269-1.548-6.298c0.267-1.938,6.031-5.543,6.031-5.543S24.311,11.611,23.878,17.27z"></path><g><path fill="#1565C0" d="M32.084 25.055c1.754-.394 3.233.723 3.233 2.01 0 2.901-4.021 5.643-4.021 5.643s6.225-.742 6.225-5.505C37.521 24.053 34.464 23.266 32.084 25.055zM29.129 27.395c0 0 1.941-1.383 2.458-1.902-4.763 1.011-15.638 1.147-15.638.269 0-.809 3.507-1.638 3.507-1.638s-7.773-.112-7.773 2.181C11.683 28.695 21.858 28.866 29.129 27.395z"></path><path fill="#1565C0" d="M27.935,29.571c-4.509,1.499-12.814,1.02-10.354-0.993c-1.198,0-2.974,0.963-2.974,1.889c0,1.857,8.982,3.291,15.63,0.572L27.935,29.571z"></path><path fill="#1565C0" d="M18.686,32.739c-1.636,0-2.695,1.054-2.695,1.822c0,2.391,9.76,2.632,13.627,0.205l-2.458-1.632C24.271,34.404,17.014,34.579,18.686,32.739z"></path><path fill="#1565C0" d="M36.281,36.632c0-0.936-1.055-1.377-1.433-1.588c2.228,5.373-22.317,4.956-22.317,1.784c0-0.721,1.807-1.427,3.477-1.093l-1.42-0.839C11.26,34.374,9,35.837,9,37.017C9,42.52,36.281,42.255,36.281,36.632z"></path><path fill="#1565C0" d="M39,38.604c-4.146,4.095-14.659,5.587-25.231,3.057C24.341,46.164,38.95,43.628,39,38.604z"></path></g>
                </svg></div>
            <div  class="my-skill"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                <path fill="#80deea" d="M24,34C11.1,34,1,29.6,1,24c0-5.6,10.1-10,23-10c12.9,0,23,4.4,23,10C47,29.6,36.9,34,24,34z M24,16	c-12.6,0-21,4.1-21,8c0,3.9,8.4,8,21,8s21-4.1,21-8C45,20.1,36.6,16,24,16z"></path><path fill="#80deea" d="M15.1,44.6c-1,0-1.8-0.2-2.6-0.7C7.6,41.1,8.9,30.2,15.3,19l0,0c3-5.2,6.7-9.6,10.3-12.4c3.9-3,7.4-3.9,9.8-2.5	c2.5,1.4,3.4,4.9,2.8,9.8c-0.6,4.6-2.6,10-5.6,15.2c-3,5.2-6.7,9.6-10.3,12.4C19.7,43.5,17.2,44.6,15.1,44.6z M32.9,5.4	c-1.6,0-3.7,0.9-6,2.7c-3.4,2.7-6.9,6.9-9.8,11.9l0,0c-6.3,10.9-6.9,20.3-3.6,22.2c1.7,1,4.5,0.1,7.6-2.3c3.4-2.7,6.9-6.9,9.8-11.9	c2.9-5,4.8-10.1,5.4-14.4c0.5-4-0.1-6.8-1.8-7.8C34,5.6,33.5,5.4,32.9,5.4z"></path><path fill="#80deea" d="M33,44.6c-5,0-12.2-6.1-17.6-15.6C8.9,17.8,7.6,6.9,12.5,4.1l0,0C17.4,1.3,26.2,7.8,32.7,19	c3,5.2,5,10.6,5.6,15.2c0.7,4.9-0.3,8.3-2.8,9.8C34.7,44.4,33.9,44.6,33,44.6z M13.5,5.8c-3.3,1.9-2.7,11.3,3.6,22.2	c6.3,10.9,14.1,16.1,17.4,14.2c1.7-1,2.3-3.8,1.8-7.8c-0.6-4.3-2.5-9.4-5.4-14.4C24.6,9.1,16.8,3.9,13.5,5.8L13.5,5.8z"></path><circle cx="24" cy="24" r="4" fill="#80deea"></circle>
                </svg></div>
            
        </div>

    </section>
    <hr/>
    <section class="project" id="project">
        <h2 class="heading">My <span>Works</span></h2>
        <div class="project-container">
            {/* <!-- Project 1: Delish - Restaurant Web Application --> */}
            <div class="project-box">
                <div class="works">
                    <img src={delish} alt="Delish - Restaurant Web App"/>
                    <div class="project-details">
                        <h3>Delish - Restaurant Web Application</h3>
                        <p>A full-fledged restaurant web application that allows users to browse menus, add items to their cart, and place orders online.</p>
                        <p><strong>Technologies Used:</strong> React, MongoDB</p>
                        <a href="https://delish-app.netlify.app/" target="_blank">View Project</a>
                    </div>
                </div>
            </div>
    
            {/* <!-- Project 2: Techy Software Website --> */}
            <div class="project-box">
                <div class="works">
                    <img id="pega" src={techysoftware} alt="Techy Software Website"/>
                    <div class="project-details">
                        <h3>Techy Software Website</h3>
                        <p>A portfolio website designed for a software company, showcasing their services, team, and portfolio.</p>
                        <p><strong>Technologies Used:</strong> HTML, CSS, JavaScript</p>
                        <a href="https://tech-software.netlify.app" target="_blank">View Project</a>
                    </div>
                </div>
            </div>
    
            {/* <!-- Project 3: Login and Signup Page -->
            <!-- <div class="project-box">
                <div class="works">
                    <img src="./Project_images/loginSignup.png" alt="Login and Signup Page">
                    <div class="project-details">
                        <h3>Login and Signup Page</h3>
                        <p>A responsive login and signup page designed using HTML, CSS, and JavaScript. The page features attractive UI and validation.</p>
                        <p><strong>Technologies Used:</strong> HTML, CSS, JavaScript</p>
                        <a href="https://github.com/Mageshsp/project-nexus1-LoginandSignupPage" target="_blank">View Project</a>
                    </div>
                </div>
            </div> --> */}
            {/* project 4: weather app */}
            <div class="project-box">
                <div class="works">
                    <img src={weatherapp} alt="Weather App"/>
                    <div class="project-details">
                        <h3>Weather App</h3>
                        <p>A responsive weather application that provides real-time weather details, including temperature, humidity, wind speed, and more. It features a clean and user-friendly UI.</p>
                        <p><strong>Technologies Used:</strong> React.js, OpenWeather API</p>
                        <a href="https://visit-weather.netlify.app/" target="_blank">View Project</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    <hr/>
    <footer class="contact" id="contact">
        
        <h2 class="heading">Get in <span>Touch</span></h2>
        <a href="mailto:spmagesh35@gmail.com" class="email">spmagesh35@gmail.com</a>
        <p class="phone">📞 +91 9677763789</p>
    </footer>

    </div>
  )
}

export default App