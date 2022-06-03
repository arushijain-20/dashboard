import React from 'react'
import { LineChart, Line, CartesianGrid, XAxis,Tooltip } from 'recharts';

const Graph = ({percentile}) => {

    const data = [
        {
          name: "0%",
          x: 0,
         
        },

        {
            name: "20%",
            x: 20,
           
          },
          {
            name: {percentile},
            x: 30,
           
          },
        
        {
          name: "40%",
          x: 50,
        
        },
       
        {
          name: "60%",
          x: 30,
          
        },
        {
          name: "80%",
          x: 70,
          
        },
        {
          name: "100%",
          x: 50,
          
        },
       
      ];


  return (
    <div className='graph'>
 <LineChart width={600} height={300} data={data}>
    <Line type="monotone" dataKey="x" stroke="#8884d8" />
    <CartesianGrid stroke="#ccc" />
    <XAxis dataKey={["0%","20%","40%","60%","80%","100%"]} />
    <Tooltip/>
  </LineChart>
    </div>
  )
}

export default Graph