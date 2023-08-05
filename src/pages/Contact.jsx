import React from 'react'
import { Link } from 'react-router-dom'
import Nav_UI from '../components/Nav_UI'

function Contact() {
  return (
    <div className='contactBackground'>
      <Nav_UI/>
      <div className='title' id='contact'>CONTACT</div>
      <div className="discord">DISCORD</div>
      <div id='discord1'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque vero exercitationem quas quae nesciunt perferendis maiores asperiores aut dolor possimus porro dicta amet, ex omnis incidunt officiis vitae maxime soluta.</div>
      <div id='discord2'>discord.com/channels/123456789</div>
      <div id='discord1'></div>
    </div>
  )
}

export default Contact
