import React from 'react'
import './Projects.css'
import delish from '../../Asserts/ProjectPics/delish.png';
import techysoftware from '../../Asserts/ProjectPics/techySoftware.png';
import weatherapp from '../../Asserts/ProjectPics/weatherapp.png'
import Blog from '../../Asserts/ProjectPics/Blog.png'
import ContactUs from '../../Asserts/ProjectPics/ContactUs.png'
import TodoList from '../../Asserts/ProjectPics/TodoList.png'
const Projects = () => {
    return (
        <section class="project" id="project">
            <h2 class="heading">My <span>Works</span></h2>
            <div class="project-container">
                {/* <!-- Project 1: Delish - Restaurant Web Application --> */}
                <div class="project-box">
                    <div class="works">
                        <img src={delish} alt="Delish - Restaurant Web App" />
                        <div class="project-details">
                            <h3>Delish - Restaurant Web Application</h3>
                            <p>A full-fledged restaurant web application that allows users to browse menus, add items to their cart, and place orders online.</p>
                            <p><strong>Technologies Used:</strong> React, MongoDB</p>
                            <a href="https://delish-app.netlify.app/" target="_blank">View Project</a>
                            <a href='https://github.com/Mageshsp/project-nexus2-SimpleRestaurantWebsite' target='_blank'>View Code</a>
                        </div>
                    </div>
                </div>

                {/* <!-- Project 2: Techy Software Website --> */}
                <div class="project-box">
                    <div class="works">
                        <img id="pega" src={techysoftware} alt="Techy Software Website" />
                        <div class="project-details">
                            <h3>Techy Software Website</h3>
                            <p>A portfolio website designed for a software company, showcasing their services, team, and portfolio.</p>
                            <p><strong>Technologies Used:</strong> HTML, CSS, JavaScript</p>
                            <a href="https://tech-software.netlify.app" target="_blank">View Project</a>
                            <a href='https://github.com/Mageshsp/project-nexus3-Techy-Software' target='_blank'>View Code</a>
                        </div>
                    </div>
                </div>

                {/* project 3: weather app */}
                <div class="project-box">
                    <div class="works">
                        <img src={weatherapp} alt="Weather App" />
                        <div class="project-details">
                            <h3>Weather App</h3>
                            <p>A responsive weather application that provides real-time weather details, including temperature, humidity, wind speed, and more. It features a clean and user-friendly UI.</p>
                            <p><strong>Technologies Used:</strong> React.js, OpenWeather API</p>
                            <a href="https://visit-weather.netlify.app/" target="_blank">View Project</a>
                            <a href='https://github.com/Mageshsp/weatherapp' target='_blank'>View Code</a>
                        </div>
                    </div>
                </div>
                {/* project 4: contact us */}
                <div class="project-box">
                    <div class="works">
                        <img src={ContactUs} alt="Contact Us Form" />
                        <div class="project-details">
                            <h3>Contact Us Form</h3>
                            <p>A responsive contact form designed to collect user inquiries with proper validation and email functionality. It ensures accessibility and seamless user experience.</p>
                            <p><strong>Technologies Used:</strong> React.js, Node.js, MongoDB</p>
                            <a href="https://basic-contactus-form.netlify.app/" target="_blank">View Project</a>
                            <a href='https://github.com/Mageshsp/ContactForm' target='_blank'>View Code</a>
                        </div>
                    </div>
                </div>

                {/* project 5: Blog app */}
                <div class="project-box">
                    <div class="works">
                        <img src={Blog} alt="Simple Blog App" />
                        <div class="project-details">
                            <h3>Simple Blog App</h3>
                            <p>A blogging platform that allows users to create, read, update, and delete (CRUD) blog posts. It features a clean UI and ensures a smooth user experience for content management.</p>
                            <p><strong>Technologies Used:</strong> React.js, Node.js, Express.js, MongoDB</p>
                            <a href="https://simplewebblog.netlify.app/" target="_blank">View Project</a>
                            <a href='https://github.com/Mageshsp/weatherapp' target='_blank'>View Code</a>
                        </div>
                    </div>
                </div>

                {/* project 6: todolist */}
                <div class="project-box">
                    <div class="works">
                        <img src={TodoList} alt="To-Do List" />
                        <div class="project-details">
                            <h3>To-Do List</h3>
                            <p>A dynamic to-do list application that helps users manage tasks efficiently. Features include adding, editing, and deleting tasks with local storage for persistence.</p>
                            <p><strong>Technologies Used:</strong> React.js, Local Storage</p>
                            <a href="https://demo-to-dolist.netlify.app/" target="_blank">View Project</a>
                            <a href='https://github.com/Mageshsp/crudapp' target='_blank'>View Code</a>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Projects