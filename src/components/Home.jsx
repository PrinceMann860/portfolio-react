import React from 'react'
import Typed from 'typed.js'
import img1 from './images/png1.png'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate=  useNavigate()
  function handleclick(){
    navigate('/contact')
  }
    const el = React.useRef(null);
  
    React.useEffect(() => {
      const typed = new Typed(el.current, {
        strings: ['Pritam Mann'],
        typeSpeed: 100,
      });
  
      return () => {
        // Destroy Typed instance during cleanup to stop animation
        typed.destroy();
      };
    }, []);
  
  return (
    <div className='main'>
        
        <div className="right">
            <img id='image' src= {img1} alt="img error" />
        </div>
        <div className="left">
            <span id='yellow'>Hello, welcome</span>
            <h1>I m <span id='yellow'><span ref={el} /></span></h1>
            {/* <p>Welcome to my digital playground, where code meets creativity! I am a passionate web developer with a knack for crafting dynamic and responsive websites that not only look stunning but also offer seamless user experiences. With a blend of technical expertise and artistic vision, I transform ideas into interactive, functional digital realities. Whether you need a sleek business site, a vibrant e-commerce platform, or a personal blog that stands out, I am here to bring your vision to life. Let's connect and build something extraordinary together! 🚀</p> */}
            <p>Welcome to the digital canvas where creativity meets code! As a passionate front-end developer, I specialize in crafting visually stunning, highly interactive, and responsive websites. My mission is to bring your ideas to life with pixel-perfect precision and seamless user experiences. From dynamic web applications to eye-catching portfolios, I blend artistic vision with cutting-edge technology to create digital masterpieces. Let's collaborate and build the future of the web together! 🚀</p>
            <button id='contact' onClick={handleclick}>Contact us</button>
        </div>
    </div>
  )
}

export default Home