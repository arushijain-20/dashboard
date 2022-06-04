import React from "react";
import { LineChart, Line, Tooltip } from "recharts";

const Graph = ({ percentile }) => {



  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p className="label">{` ${payload[0].value}`}</p>
          <p className="desc">{payload[0].value===percentile?"Your percentile":(payload[0].value===72?"Average percentile":"")}</p>
        </div>
      );
    }
  
    return null;
  };

  const data = [
 {
   y:0
 },
 {
  y:50
},
{
  y:`${percentile}`
},
{
  y:72
},
{
  y:10
}
  ];

  return (
    <div className="graph" >
      <LineChart width={800} height={400}  style={{margin:"4px auto"}} data={data}>
        <Line type="monotone" dataKey="y" stroke="#8884d8" />

        
        <Tooltip content={<CustomTooltip />}  />
      </LineChart>
    </div>
  );
};

export default Graph;
