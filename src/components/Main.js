import React from 'react'
import PropTypes from 'prop-types'

import Album from './album.js'

import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'
import img_me_6x9 from '../images/me_6x9.jpg'
import cologne_cath_green from '../images/cologne/cologne_cathedral_green.jpg'
import cologne_cath_bw from '../images/cologne/cologne_cathedral_bw.jpg'
import rheinauhafen from '../images/rheinauhafen.jpg'

class Main extends React.Component {
   render() {

      let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

      return (
         <div ref={this.props.setWrapperRef} id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

            <article id="intro" className={`${this.props.article === 'intro' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
               <h2 className="major">Intro</h2>
               <Album></Album>
               {close}
            </article>

            <article id="work" className={`${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{ width: '60%', display:'none'}}>
               {/*<h2 className="major">Work</h2>*/}
               <span>
                  <img className="image fit" src={cologne_cath_green} alt="" />
                  <img className="image fit" src={rheinauhafen} alt="" />
                  <img className="image fit" src={cologne_cath_bw} alt="" />
               </span>
               {close}
            </article>

            <article id="about" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
               <h2 className="major">About</h2>
               <span className="">
                  <img className="image left" src={img_me_6x9} alt="" />
               </span>
               <p>
                  {"'"}99 in Cologne, Germany <br /> I{"'"}m a young photographer and IT enthusiast<br />
                  Aliquam luctus tellus ac arcu volutpat efficitur. Maecenas sed posuere nisl, tempor pharetra eros. Vivamus facilisis odio nunc, eget egestas ipsum pellentesque id. Cras in rutrum ante. Fusce sit amet tellus vel ante interdum molestie. Nam dignissim dolor sapien, ut ullamcorper tellus commodo id. Nulla malesuada aliquet imperdiet. Donec volutpat risus ut tellus suscipit, vel feugiat augue elementum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent porta arcu tortor, nec interdum nibh congue quis. Nullam mattis elit et orci rhoncus, nec venenatis magna commodo. Lorem ipsum dolor sit amet, consectetur adipiscing elit
               </p>
               {close}
            </article>

            <article id="feedback" className={`${this.props.article === 'feedback' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
               <h2 className="major">Feedback</h2>
               <form method="post" action="#">
                  <div className="field half first">
                     <label htmlFor="name">Name</label>
                     <input type="text" name="name" id="name" />
                  </div>
                  <div className="field half">
                     <label htmlFor="email">Email</label>
                     <input type="text" name="email" id="email" />
                  </div>
                  <div className="field">
                     <label htmlFor="message">Message</label>
                     <textarea name="message" id="message" rows="4"></textarea>
                  </div>
                  <ul className="actions">
                     <li><input type="submit" value="Send Message" className="special" /></li>
                     <li><input type="reset" value="Reset" /></li>
                  </ul>
               </form>
               {close}
            </article>
         </div>
      )
   }
}

Main.propTypes = {
   route: PropTypes.object,
   article: PropTypes.string,
   articleTimeout: PropTypes.bool,
   onCloseArticle: PropTypes.func,
   timeout: PropTypes.bool,
   setWrapperRef: PropTypes.func.isRequired,
}

export default Main
