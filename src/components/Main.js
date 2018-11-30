import React from 'react'
import PropTypes from 'prop-types'
import ImageGallery from 'react-image-gallery'
import GalleryElement from './galleryElement.js'

import pic01 from '../images/pic01.jpg'
import img_me_6x9 from '../images/me_6x9.jpg'
import cologne_cath_green from '../images/cologne/cologne_cathedral_green.jpg'
import cologne_cath_bw from '../images/cologne/cologne_cathedral_bw.jpg'
import rheinauhafen from '../images/rheinauhafen.jpg'



const images_cologne = [
  {
    original: cologne_cath_bw
  },
  {
    original: cologne_cath_green
  },
  {
    original: rheinauhafen
  }
]
const preview_img_cologne = cologne_cath_green

class Main extends React.Component {

   renderRightNav(onClick, disabled) {
      return (
         <i
            className='fa fa-angle-right fa-3x rightArrow'
            disabled={disabled}
            onClick={onClick}
         />
      )
   }

   renderLeftNav(onClick, disabled) {
      return (
         <i
            className='fa fa-angle-left fa-3x leftArrow'
            disabled={disabled}
            onClick={onClick}
         />
      )
   }

   renderFullscreenButton(onClick, isFullScreen) {
      return (
         <i
            className='fa fa-expand fa-2x fullScreen'
            onClick={onClick}
            style={{cursor: 'pointer'}}
         />
      )
   }

   render() {
      let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

      return (
         <div ref={this.props.setWrapperRef} id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>
            <article id="intro" className={`${this.props.article === 'intro' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
               <h2 className="major">Intro</h2>
               <span className="image main"><img src={pic01} alt=""/></span>
                  <p>
                     Aliquam luctus tellus ac arcu volutpat efficitur. Maecenas sed posuere nisl, tempor pharetra eros. Vivamus facilisis odio nunc, eget egestas ipsum pellentesque id. Cras in rutrum ante. Fusce sit amet tellus vel ante interdum molestie. Nam dignissim dolor sapien, ut ullamcorper tellus commodo id. Nulla malesuada aliquet imperdiet. Donec volutpat risus ut tellus suscipit, vel feugiat augue elementum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent porta arcu tortor, nec interdum nibh congue quis. Nullam mattis elit et orci rhoncus, nec venenatis magna commodo. Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </p>
               {close}
            </article>

            <article id="work" className={`${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{ display:'none'}}>
               <h2 className="major">Work</h2>
               <div style={this.props.isAlbumVisible ? {display:'block', marginBottom: '1%'} : {display:'none'}}>
                  <span className='fa fa-long-arrow-left fa-1x' onClick={()=>{this.props.onCloseAlbum()}} style={{ cursor: 'pointer'}}></span>
                  <span onClick={()=>{this.props.onCloseAlbum()}} style={{ cursor: 'pointer', marginLeft: '1%' }}>back</span>
               </div>
               <div id="gallery_overview" className="gallery_overview" style={this.props.isAlbumVisible ? {display: 'none'} : {display: 'inline-flex', flexWrap: 'wrap'}}>
                  <i onClick={()=>{this.props.onOpenAlbum('cologne')}}>
                      <GalleryElement>Cologne</GalleryElement>
                  </i>
                  <i>
                      <GalleryElement></GalleryElement>
                  </i>
                  <i>
                      <GalleryElement></GalleryElement>
                  </i>
                  <i>
                     <GalleryElement></GalleryElement>
                  </i>
               </div>
               <div id="gallery_cologne" style={this.props.isAlbumVisible ? {display: 'block'} : {display: 'none'}}>
                  <ImageGallery
                     renderFullscreenButton={this.renderFullscreenButton}
                     renderLeftNav={this.renderLeftNav}
                     renderRightNav={this.renderRightNav}
                     showNav={true}
                     showIndex={true}
                     showPlayButton={false}
                     preloadNextImage={true}
                     disableSwipe={false}
                     items={images_cologne}
                  />
               </div>
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
   album: PropTypes.string,
   articleTimeout: PropTypes.bool,
   onCloseArticle: PropTypes.func,
   onCloseAlbum: PropTypes.func,
   onOpenAlbum: PropTypes.func,
   timeout: PropTypes.bool,
   setWrapperRef: PropTypes.func.isRequired,
   isAlbumVisible: PropTypes.bool
}

export default Main
