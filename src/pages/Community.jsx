import React from 'react'
import Nav_UI from '../components/Nav_UI'

function Community() {
  return (
    <div className='communityBackground'>
        <Nav_UI/>
        <div className="title" id='community'>COMMUNITY</div>
        <div className="boondocks">
            <img src='https://64.media.tumblr.com/97d19195cf53c0419ed1bb19aaa3f3a3/tumblr_mpy5n2Xv9H1rgam01o1_500.gif' alt='' id='boondocks' />
        </div>
        <div className="comtext" id='com1'>This is true but not completely...</div>
        <div className="comtext" id='com2'>You do what you can WITH OTHERS</div>
        <div className="star" id='star1'>
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Red_star.svg/1235px-Red_star.svg.png' alt='' id='star' />
        </div>
        <div className="p4p">
            <div id='pcom1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, error, a libero repellendus necessitatibus obcaecati culpa rem, odio voluptatibus dignissimos voluptatum velit! Officiis explicabo nostrum corporis maiores adipisci culpa sunt optio facilis ea impedit aliquid officia tenetur ratione blanditiis aut nesciunt iusto, ullam perspiciatis rem ipsam reprehenderit laboriosam sequi alias.</div>
            <div id='pcom2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia alias consequatur repellendus delectus officia? Aliquid vero officia voluptatem dolore quaerat odio dolor quis repellat beatae earum, exercitationem sapiente at itaque?</div>
            <div className="star">
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Red_star.svg/1235px-Red_star.svg.png' alt='' id='star2' />
        </div>
        <div className="resources">RESOURCES</div>
        
        </div>
    </div>
  )
}

export default Community
