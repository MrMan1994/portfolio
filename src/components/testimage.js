import React from 'react'
import rheinauhafen from '../images/rheinauhafen.jpg'

class TestImage extends React.Component {



   render(){
      return(
         <div style={{ position: 'relative', display: 'flex' }}>
            <img src={rheinauhafen} width="90%" alt="" />
            <span style={{ position: 'absolute', display: 'flex', width: '90%', alignItems: 'center', justifyContent: 'center', bottom: 0 }}>Cologne</span>
         </div>
      )
   }
}

export default TestImage
