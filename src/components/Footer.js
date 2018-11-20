import React from 'react'
import PropTypes from 'prop-types'

const Footer = (props) => (
   <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
      <p className="copyright">&copy; <i>2018 - Ruben Mosblech</i><br /><a href="https://stock.adobe.com/de/contributor/208227324/Ruben" target="_blank">My Adobe Stock Account</a></p>
   </footer>
)

Footer.propTypes = {
   timeout: PropTypes.bool
}

export default Footer
