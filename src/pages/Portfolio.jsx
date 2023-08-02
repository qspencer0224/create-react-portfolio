import React, { useContext } from 'react'
import { AppContext } from '../context/app_context'
import Nav_UI from '../components/Nav_UI'

function Portfolio() {

    const {} = useContext(AppContext)
  return (
      <div className='portBackground'>
        <Nav_UI/>
        <div className='title'>MANIFESTATIONS</div>
      </div>
    
  )
}

export default Portfolio
