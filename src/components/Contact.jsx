import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
const Contact = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Contact <span id='yellow'>Me</span></h1>
      <p>I'm always excited to connect and collaborate on new projects! Whether you have a question, a proposal, or simply want to say hello, feel free to reach out. Your inquiries are important to me, and I strive to respond promptly.</p>
      <div className="content">
            <p><span id='yellow'>Name:- </span> Pritam mann</p>
            <p><span id='yellow'>Ph. No.:- </span> +91 9354510261</p>
            <p><span id='yellow'>Email:- </span> preetam1202204@gmail.com</p>
            <p><span id='yellow'>Website:- </span> www.xyzabc.com</p>
      </div> 
      <div className="content2">
        <h2>Social <span id='yellow'>Media</span> handles :-</h2>
        <p>
          <a href="https://wa.me/qr/QN7HDF4LCG6RP1"><FontAwesomeIcon icon={faWhatsapp} /></a>
          <a href="https://www.linkedin.com/in/pritam-mann-262aa0332?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app "><FontAwesomeIcon icon={faLinkedin} /></a>
          <a href="https://www.instagram.com/Princemann860"><FontAwesomeIcon icon={faInstagram} /></a>
          <a href="https://github.com/PrinceMann860"><FontAwesomeIcon icon={faGithub} /></a>
        </p>
      </div>   
    </div>
  )
}

export default Contact