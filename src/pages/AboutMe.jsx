import React from 'react'
import { Link } from 'react-router-dom'
import Nav_UI from '../components/Nav_UI'

function AboutMe() {
  return (
      <div className='aboutBackground'>
        <Nav_UI/>
        <div className='title' id='about'>About me</div>
        <div className="aboutbox">
          <div className="aboutp1">Hello, my name Quenton Spencer and I'm <strong>a software engineer</strong>.</div>
          <div className='aboutp2'><strong>I take pride</strong> in my creative background which includes graphic design and videography which has <strong>expanded</strong> my interest in technology and becoming a software engineer.</div>
          <div className="aboutp3">I am currently an advanced learner with the Per Scholas Software Engineering Program which consist of <strong>HTML</strong>, <strong>CSS</strong>, <strong>Javascript</strong>, <strong>React.js</strong>, <strong>Git</strong>, and <strong>Node.js</strong></div>
          <div className="aboutp4">Based In Dallas, TX. <strong>Available anywhere</strong>.</div>
        </div>
        
      </div>
  )
}

export default AboutMe
