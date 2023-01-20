import React from 'react'
import "./footer.css"

const Footer = () => {
  return (
    <div className='footer section__padding'>

      <div className='footer__hoo'>
        <div className = "footer__hoo-top">
          <div>
            <div><img src="" alt="" /></div>
            <h2>Hoo<span>Bank</span></h2>
          </div>
        </div>
        <div className = "footer__hoo-bottom">
          <p>A new way to make the payments easy, reliable and secure.</p>
        </div>
      </div>

      <div className='footer__links footer__useful'>
        <h5>Useful Links</h5>
        <ul>
          <li>Content</li>
          <li>How it Works</li>
          <li>Create</li>
          <li>Explore</li>
          <li>Terms & Services</li>
        </ul>
      </div>

      <div className='footer__links footer__community'>
        <h5>Community</h5>
        <ul>
          <li>Help Center</li>
          <li>Partners</li>
          <li>Suggestions</li>
          <li>Blog</li>
          <li>Newsletters</li>
        </ul>
      </div>

      <div className='footer__links footer__partner'>
        <h5>Partner</h5>
        <ul>
          <li>Our Partner</li>
          <li>Become a Partner</li>
        </ul>
      </div>

    </div>
  )
}

export default Footer