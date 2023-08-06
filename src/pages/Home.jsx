import React from 'react'
import { AppContext } from '../context/app_context'
import { useContext } from 'react'
import Nav_UI from '../components/Nav_UI'
import Marquee from 'react-fast-marquee'

function Home() {
  const {} = useContext(AppContext)
  return (
      <div className='homebackground'>
        <Nav_UI/>
        {/* <div className='title'>"THE IDEA BOOK" of quenton spencer</div> */}
        <div className="homebox">
          <div className="chaosbox">
            <img src='https://cdn.britannica.com/24/3824-050-0F72B625/Hippopotamus-Hunt-canvas-Peter-Paul-Rubens-Alte.jpg' alt='' className='chaos' />
          </div>
          <div className="homeright">
            <div className="school">
              <img src='https://sharecharlotte.org/sites/default/files/Logo-Horizontal-Light.png' alt='' className='schoolpic' />
            </div>
            <div className="skills">
              <img src='https://www.freepnglogos.com/uploads/html5-logo-png/html5-logo-devextreme-multi-purpose-controls-html-javascript-3.png' alt='' className='skillpic'/>
              <img src='https://cdn1.iconfinder.com/data/icons/programing-development-8/24/react_logo-512.png' alt='' className='skillpic'/>
            </div>
            <div className="instagram">CREATIVE.</div>
            <div className="email">SOFTWARE ENGINEER.</div>
            <div className="eh">HUMAN.</div>
            <div className="logo">
              <img src='https://cdn-icons-png.flaticon.com/512/4257/4257487.png' alt='' id='logo' />
            </div>
          </div>
        </div>
        <div className="godbox">
          <div className="dot"></div>
          <div className="god">GOD</div>
        </div>
        {/* <div className="bigbox">
          <div className="details">
            <div className="creative">-creative</div>
            <div className='engineer'>-software engineer</div>
            <div className='human'>-human.</div>
          </div>
        </div> */}
          

          {/* <div className="skills">
            <img src='https://www.freepnglogos.com/uploads/html5-logo-png/html5-logo-devextreme-multi-purpose-controls-html-javascript-3.png' alt='' className='skillpic'/>
            <img src='https://cdn1.iconfinder.com/data/icons/programing-development-8/24/react_logo-512.png' alt='' className='skillpic'/>
          </div> */}
          {/* <div className="school">
            <img src='https://sharecharlotte.org/sites/default/files/Logo-Horizontal-Light.png' alt='' className='schoolpic' />
          </div> */}
          {/* <div className="infobox">
            <div className="left">
              <div className="instagram">Instagram: @ techinsta</div>
              <div className="email">Email me: randomemail@gmail.com</div>
            </div>
            <div className="right"></div>
          </div> */}

          {/* <Marquee>
          <div className='marq'>"Random quote here, i'm just typing stuff just for styling purposes" -Quenton Spencer</div>
          </Marquee> */}
      </div>
  )
}

export default Home
