import React from 'react'
import rheinauhafen from '../images/rheinauhafen.jpg'

class TestImage extends React.Component {



   render(){
      return(
         <div className="overview_element" style={{ position: 'relative', maxWidth: '30%', display: 'flex', marginBottom: '1rem' }}>
            <img src={rheinauhafen} width="90%" alt="" style={{ padding: 0 }} />
            <span style={{ position: 'absolute', display: 'flex', width: '90%', alignItems: 'center', justifyContent: 'center', bottom: 0}}>Cologne</span>
         </div>
      )
   }
}

export default TestImage
