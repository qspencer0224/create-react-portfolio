import React, { useContext } from 'react'
import { AppContext } from '../context/app_context'
import Nav_UI from '../components/Nav_UI'
import img1 from '.images/cardpic2.png';

function Portfolio() {

    const {} = useContext(AppContext)
  return (
      <div className='portBackground'>
        <Nav_UI/>
        <div className='title'>MANIFESTATIONS</div>
        <div className="artbox">
          <div className="rowone">
            <div className="picone">
              <img src={img1} />
            </div>
          </div>
          <div className="rowtwo"></div>
          <div className="rowthree"></div>
        </div>
      </div>
    
  )
}

export default Portfolio
