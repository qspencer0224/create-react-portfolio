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

          <Marquee>
            <div className='marq'>
              <img src='https://www.freepnglogos.com/uploads/html5-logo-png/html5-logo-devextreme-multi-purpose-controls-html-javascript-3.png' alt='' className='scroll' />
            </div>
          </Marquee>
        </div>
      </>
  )
}

export default Home
