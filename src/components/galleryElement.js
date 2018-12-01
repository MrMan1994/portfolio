import React from 'react'

import '../assets/scss/components/_gallery.scss'

import cologne_1 from '../images/cologne/cologne_1.jpg'
import cologne_2 from '../images/cologne/cologne_2.jpg'
import cologne_3 from '../images/cologne/cologne_3.jpg'

import portrait_1 from '../images/portrait/portrait_1.jpg'
import portrait_2 from '../images/portrait/portrait_2.jpg'

class GalleryElement extends React.Component {
   render(){
      return(
         <>
            <div className="overview-element">
               <div className="overview-image-container">
                  <img className="overview-image" src={cologne_1} width="100%" height="100%" alt=""/>
                  <span className="overview-view-gallery"><h3 className="overview-view-gallery-inner"><span className="overview-view-gallery-inner-inner">View Gallery</span></h3></span>
               </div>
               <span className="overview-title"><h2>{this.props.children}</h2></span>
            </div>
         </>
      )
   }
}

export default GalleryElement
