import React from 'react'
import Lightbox from 'react-image-lightbox'
import { graphql } from 'gatsby'
import testImg from '../images/rheinauhafen.jpg'
import cologneCathedralGreen from '../images/cologne/cologne_cathedral_green.jpg'
import cologneCathedralBw from '../images/cologne/cologne_cathedral_bw.jpg'

const images = [
   testImg,
   cologneCathedralGreen,
   cologneCathedralBw
]

class Album extends React.Component {
   constructor(props) {
      super(props)

      this.state = {
         photoIndex: 0,
         isOpen: false
      }
   }

   render() {
      const { photoIndex, isOpen } = this.state

      return(
         <div>
            <img className="image main" src={testImg} alt="" onClick={() => this.setState({ isOpen: true })}/>
            {
               isOpen && (
                  <Lightbox
                     mainSrc={images[photoIndex]}
                     nextSrc={images[(photoIndex +1) % images.length ]}
                     prevSrc={images[(photoIndex + images.length -1) % images.length]}
                     onCloseRequest={() => this.setState({ isOpen: false })}
                     onMovePrevRequest={() =>
                        this.setState({
                           photoIndex: (photoIndex + images.length -1) % images.length
                        })
                     }
                     onMoveNextRequest={() =>
                        this.setState({
                           photoIndex: (photoIndex +1) % images.length
                        })
                     }
                  />
               )
            }
         </div>
      )
   }
}

export default Album
