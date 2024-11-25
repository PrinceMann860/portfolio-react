import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPython } from '@fortawesome/free-brands-svg-icons'
import { faWindowRestore } from '@fortawesome/free-regular-svg-icons'
import { faWandMagicSparkles } from '@fortawesome/free-solid-svg-icons/faWandMagicSparkles'
const Services = () => {
  return (
    <div>
      <div style={{marginLeft:'50px'}}>
        <h1>My <span id='yellow'>Service</span></h1>
        <p>At Pritam's Web Development Services, I am dedicated to delivering top-notch front-end development solutions tailored to meet your unique needs. Whether you're looking to create a visually stunning website, a dynamic web application, or an engaging user interface, I am here to help. With a focus on quality, efficiency, and user experience, I strive to bring your vision to life with precision and creativity. Let's work together to build a digital presence that truly stands out.</p>
      </div>
      <div className="parent">
        <div className="child">
          <div className="icon"><FontAwesomeIcon icon={faPython} /></div>
          <h2>Python Programming</h2>
          <p>Python is a versatile and powerful programming language renowned for its simplicity and readability. It is widely used in various domains such as web development, data analysis, artificial intelligence, scientific computing, and more.</p>
        </div>
        <div className="child">
          <div className="icon"><FontAwesomeIcon icon={faWindowRestore} /></div>
          <h2>Web Devlopment</h2>
          <p>Web development is the process of creating and maintaining websites, combining art and technology to build engaging online experiences. It involves a range of tasks including web design, web content development, client-side/server-side scripting, and network security configuration.</p>
        </div>
        <div className="child">
          <div className="icon"><FontAwesomeIcon icon={faWandMagicSparkles} /></div>
          <h2>Creative Website Design</h2>
          <p>Creative website design is the art of blending functionality with aesthetic appeal to craft visually captivating and user-friendly online experiences. It goes beyond mere visuals; it embodies the brand's identity, engages visitors, and provides intuitive navigation. Utilizing contemporary trends, innovative layouts, and dynamic elements.</p>
        </div>
      </div>
    </div>
  )
}

export default Services