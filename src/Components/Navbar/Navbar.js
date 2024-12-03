import React from 'react'
import './Navbar.css'
const Navbar = () => {
  return (
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
  )
}

export default Navbar