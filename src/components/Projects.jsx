import React from 'react'
import img3 from './images/project2.png'
import Typed from 'typed.js'

const Projects = () => {
  const el = React.useRef(null);
  
    React.useEffect(() => {
      const typed = new Typed(el.current, {
        strings: ['As a web designer and python programmer I have made some projects.'],
        typeSpeed: 100,
      });
  
      return () => {
        // Destroy Typed instance during cleanup to stop animation
        typed.destroy();
      };
    }, []);
  return (
    <div style={{textAlign:'center'}}>
      <h1>My <span id='yellow'>Project</span></h1>
      <div className="main">
        <div className="left" style={{display:'flex'}}>
          <img id='image' src={img3} alt="" />
        </div>
        <div className="left" style={{display:'flex',alignItems:'center'}}>
          <h2><span ref={el} /></h2>
        </div>
      </div>
      <div className="parent">
        <div className="child">
          
          <h2>Panda A.I. Assistant<br />(Python)</h2>
          <p>Meet Panda AI, your versatile digital companion designed to simplify your daily tasks and enhance your productivity. Panda AI can perform a wide array of functions, from complex calculations and comprehensive Google searches to opening websites and providing detailed weather updates. But that's not all—Panda AI also excels as a personal assistant, reminding you of special events and important days, ensuring you never miss a beat. Every morning and afternoon, it greets you with cheerful wishes, adding a touch of warmth to your daily routine.</p>
          <a href="https://github.com/PrinceMann860/panda-AI-assitant.git">Check out this project on GitHub.</a>
        </div>
        <div className="child">
          
          <h2>Portfolio website (OLD)<br />(HTML,CSS,JavaScript)</h2>
          <p>Welcome to my portfolio website, a showcase of my skills and qualifications. This site is one of my proudest projects, and as you explore it, you're experiencing firsthand the features and functionalities I've created. I welcome any suggestions or feedback you might have—feel free to contact me through the links below. As a beginner web developer, I built this site using HTML, CSS, and JavaScript, and it stands as a testament to my learning journey and dedication to the craft. Thank you for visiting!</p><br /><br />
          <a href="https://github.com/PrinceMann860/my-portfolio.git">Check out this project on GitHub.</a>
        </div>
        <div className="child">
          <h2>Tic-Tac-Toe Game <br />(Python)</h2>
          <p>The Tic Tac Toe game project, created using Python, is a classic implementation of the popular game that runs seamlessly in the terminal. This project showcases fundamental programming skills, including the use of control structures, functions, and user input handling. The game features a simple yet interactive interface where two players take turns to mark their symbols (X or O) on a 3x3 grid. It checks for winning conditions after each move and declares the winner or a draw accordingly.</p><br /><br />
          <a href="https://github.com/PrinceMann860/tic-tic-toe-game.git">Check out this project on GitHub.</a>
        </div>
      </div>
    </div>
  )
}

export default Projects