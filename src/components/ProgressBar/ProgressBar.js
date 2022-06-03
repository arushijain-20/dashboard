import React from 'react'

import './ProgressBar.css'

const ProgressBar = ({heading,bgcolor,progress}) => {
    const Parentdiv = {
        height: 20,
        width: '80%',
        backgroundColor: 'whitesmoke',
        borderRadius: 40,
        
      }
      
      const Childdiv = {
        height: '100%',
        width: `${progress}%`,
        backgroundColor: bgcolor,
       borderRadius:40,
        textAlign: 'right'
      }
      
      const progresstext = {
        padding: 10,
        color: bgcolor,
        fontWeight: 900
      }
  return (
    <div>
        <p className='topic'>{heading}</p>
        <div className='progress-wrapper'>
        <div style={Parentdiv}>
      <div style={Childdiv}/>
       
      </div>
      <span style={progresstext}>{`${progress}%`}</span>
    </div>

    </div>
  )
}

export default ProgressBar