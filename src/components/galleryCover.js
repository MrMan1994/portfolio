import React from 'react'
import PropTypes from 'prop-types'

class GalleryCover extends React.Component {
  render () {
    const {coverImage, onOpenAlbum, galleryName} = this.props

    return(
      <div onClick={()=>onOpenAlbum(galleryName)}>
         <div className="overview-element">
            <div className="overview-image-container">
               <img className="overview-image" src={coverImage} width="100%" height="100%" alt=""/>
               <span className="overview-view-gallery vertical"><h3 className="overview-view-gallery-h3"><span className="overview-view-gallery-inner">View Gallery</span></h3></span>
            </div>
            <span className="overview-title"><h2>{galleryName}</h2></span>
         </div>
      </div>
    )
  }
}

GalleryCover.propTypes = {
  coverImage: PropTypes.string.isRequired,
  onOpenAlbum: PropTypes.func.isRequired,
  galleryName: PropTypes.string.isRequired
}


export default GalleryCover;
