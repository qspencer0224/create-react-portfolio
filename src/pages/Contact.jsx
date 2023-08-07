import React from 'react'
import { Link } from 'react-router-dom'
import Nav_UI from '../components/Nav_UI'
import Resume_UI from '../components/Resume_UI'

function Contact() {
  return (
    <div className='contactBackground'>
      <Nav_UI/>
      <div className='title' id='contact'>Contact</div>
      <div className="discord">DISCORD</div>
      <div id='discord1'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque vero exercitationem quas quae nesciunt perferendis maiores asperiores aut dolor possimus porro dicta amet, ex omnis incidunt officiis vitae maxime soluta.</div>
      <div id='discord2'>discord.com/channels/123456789</div>
      <div id='discord1'></div>
      <div className="gmail">GMAIL</div>
      <div id='gmail1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo voluptatem at quisquam.</div>
      <div id='gmail2'>randomgmail@gmail.com</div>
      <div className="insta">INSTAGRAM</div>
      <div id='insta1'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit commodi perspiciatis iusto ipsum ex molestias eos doloremque dolores mollitia aperiam!</div>
      <div id='insta2'>@ techinsta</div>
      <Resume_UI />

    </div>
  )
}

export default Contact
