import React from 'react'
import Nav_UI from '../components/Nav_UI'
import Marquee from 'react-fast-marquee'

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
        </div>
        <div className="resources">RESOURCES</div>
        <div className="resource" id='resource1'>
            <img src='https://images-us.bookshop.org/ingram/9780415968188.jpg?height=500&v=v2' alt='' id='resource' />
        </div>
        <div className='resource' id='resource2'>
            <img src='https://press.uchicago.edu/.imaging/mte/ucp/medium/dam/ucp/books/jacket/978/09/21/68/9780921689263.jpg/jcr:content/9780921689263.jpg' alt='' id='resource' />
        </div>
        <div className="responsibility">
            <img src='https://i.ytimg.com/vi/tp4FGAv2gks/maxresdefault.jpg' alt='' id='responsibility' />
        </div>
        <div className="more">more coming soon</div>
    </div>
  )
}

export default Community
