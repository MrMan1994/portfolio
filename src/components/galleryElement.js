import React from 'react'
import rheinauhafen from '../images/rheinauhafen.jpg'

import '../assets/scss/components/_gallery.scss'

class GalleryElement extends React.Component {
   render(){
      return(
         <div className="overview-element">
            <div className="overview-image-container">
               <img className="overview-image" src={rheinauhafen} width="100%" height="100%" alt=""/>
               <span className="overview-view-gallery"><h3 className="overview-view-gallery-inner"><span className="overview-view-gallery-inner-inner">View Gallery</span></h3></span>
            </div>
            <span className="overview-title"><h3>{this.props.children}</h3></span>
         </div>
      )
   }
}

export default GalleryElement
