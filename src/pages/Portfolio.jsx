import React, { useContext } from 'react'
import { AppContext } from '../context/app_context'
import Nav_UI from '../components/Nav_UI'

function Portfolio() {

    const {} = useContext(AppContext)
  return (
      <div className='portBackground'>
        <Nav_UI/>
        <div className='title'>MANIFESTATIONS</div>
        <div className="artbox">
          <div className="rowone">
            <div className="r1left">
            <div className="r1lbox">
            <div className="pic" id='one'>
                <img src='' alt='' id='picone' />
              </div>
              <div className="pic" id='two'>
                <img src='' alt='' id='pictwo' />
              </div>
            </div>
            <div className="description" id='done'>This is my Card Project</div>
            <div className="git" id='gitone'>
              {/* this is where the github link is going */}
            </div>
            </div>


            <div className="r1right">
              <div className="r1rightbox">
                <div className="pic" id='three'>
                  <img src='' alt='' id='picthree' />
                </div>
              </div>
              <div className="description" id='dtwo'>This is my ATM Project</div>
              <div className="git" id='gittwo'>
                {/* this is where the github link is going */}
              </div>
            </div>
          </div>

          <div className="rowtwo">
            <div className="r2left">
              <div className="r2leftbox">
                <div className="pic" id='four'>
                  <img src='' alt='' id='picfour'/>
                </div>
                <div className="description" id='dthree'>This is my Calculator Project</div>
                <div className="git" id='gitthree'>
                {/* this is where my github link is going */}
              </div>
              </div>
            </div>
          </div>

          <div className="rowthree">
          </div>
        </div>
      </div>
    
  )
}

export default Portfolio
