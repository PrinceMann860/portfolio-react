import React from 'react'

const Resume = () => {
    const resumeUrl = "https://drive.google.com/file/d/10zTjaAeGVzhEzmutXTVD-MC-22uqwhvE/view?usp=sharing";

  return (
        <div> <h1>My Resume</h1> 
        <iframe src={resumeUrl} style={{ width: '100%', height: '600px', border: 'none' }} title="Resume" ></iframe> 
        </div>
  )
}

export default Resume