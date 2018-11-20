import React from 'react'
import PropTypes from 'prop-types'

const Header = (props) => (
   <header id="header" style={props.timeout ? {display: 'none'} : {}}>
      <div className="logo">
         <span className="icon fa-diamond"></span>
      </div>
      <div className="content">
         <div className="inner">
            <h1>Ruben Mosblech Photography</h1>
            <p>

            </p>
         </div>
      </div>
      <nav>
         <ul>
            <li><a href="javascript:;" onClick={() => {props.onOpenArticle('intro')}}>Intro</a></li>
            <li><a href="javascript:;" onClick={() => {props.onOpenArticle('work')}}>Work</a></li>
            <li><a href="javascript:;" onClick={() => {props.onOpenArticle('about')}}>About</a></li>
            <li><a href="javascript:;" onClick={() => {props.onOpenArticle('contact')}}>Contact</a></li>
            <li><a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=SHJ6T5HEET968&source=url" onClick={() => {props.onOpenArticle('donation')}}>Donate</a></li>
         </ul>
      </nav>
   </header>
)

Header.propTypes = {
   onOpenArticle: PropTypes.func,
   timeout: PropTypes.bool
}

export default Header
