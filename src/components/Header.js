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
         </div>
      </div>
      <nav>
         <ul>
            <li><a href="#" onClick={() => {props.onOpenArticle('intro')}}>Intro</a></li>
            <li><a href="#" onClick={() => {props.onOpenArticle('work')}}>Work</a></li>
            <li><a href="#" onClick={() => {props.onOpenArticle('about')}}>About</a></li>
            <li><a href="#" onClick={() => {props.onOpenArticle('feedback')}}>Feedback</a></li>
            <li><a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=SHJ6T5HEET968&source=url" rel="noopener noreferrer" target="_blank">Donate</a></li>
         </ul>
      </nav>
   </header>
)

Header.propTypes = {
   onOpenArticle: PropTypes.func,
   timeout: PropTypes.bool
}

export default Header
