import React from 'react'
import img1 from './images/png2.png'
import { useNavigate } from 'react-router-dom'
const About = () => {
  const navigate= useNavigate()
  function handleclick(){
    navigate('/contact')
  }
  return (
    <div className='main'>
      <div className="left">
      <div className="imagebox">
            <img id='image' src= {img1} alt="img error" />
          </div>
      </div>
      <div className="right">
        <h1>About <span id='yellow'>Me</span></h1>
        <p>Hello! My name is Pritam Mann (Prince). I am currently a student at JMS IT College, where I am pursuing my education with a focus on web development. I am enhancing my skills and knowledge through a web development course at DUCAT. My proficiency spans several key technologies, including HTML, CSS, JavaScript, Bootstrap, React, and Python. I am committed to developing robust and user-friendly web applications, constantly striving to improve and expand my technical expertise. Thank you for visiting my portfolio. I look forward to connecting and collaborating on exciting projects.</p>
        <button id='contact' onClick={handleclick}>Contact us</button>
      </div>
    </div>
  )
}

export default About