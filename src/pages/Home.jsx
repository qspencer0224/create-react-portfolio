import React from 'react'
import { AppContext } from '../context/app_context'
import { useContext } from 'react'
import Nav_UI from '../components/Nav_UI'
import Marquee from 'react-fast-marquee'

function Home() {
  const {} = useContext(AppContext)
  return (
      <>
        <Nav_UI/>
        <div className='homeBackground'>
          <div className='title'>"THE IDEA BOOK"</div>
          <div className='name'>-QUENTON SPENCER</div>
          <div className="creative">-creative</div>
          <div className='engineer'>-software engineer</div>
          <div className='human'>-human.</div>

          <div className="skills">
            <img src='https://www.freepnglogos.com/uploads/html5-logo-png/html5-logo-devextreme-multi-purpose-controls-html-javascript-3.png' alt='' className='skillpic'/>
            <img src='https://cdn1.iconfinder.com/data/icons/programing-development-8/24/react_logo-512.png' alt='' className='skillpic'/>
          </div>
          <div className="school">
            <img src='https://sharecharlotte.org/sites/default/files/Logo-Horizontal-Light.png' alt='' className='schoolpic' />
          </div>
          <div className="infobox">
            <div className="left">
              <div className="instagram">Instagram: @ techinsta</div>
              <div className="email">Email me: randomemail@gmail.com</div>
            </div>
            <div className="right"></div>
          </div>

          <Marquee>
          <div className='marq'>"Random quote here, i'm just typing stuff just for styling purposes" -Quenton Spencer</div>
          </Marquee>
        </div>
      </>
  )
}

export default Home
