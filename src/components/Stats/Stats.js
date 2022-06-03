import React from 'react'

import './Stats.css'

const Stats = ({data,metadata,img}) => {
  return (
    <div className="stats-data">
    <img src={img} alt="img"></img>
    <div className='stats-info'>
    <h2>{data}</h2>
    <p>{metadata}</p></div>
  </div>
  )
}

export default Stats