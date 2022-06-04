import React from "react";
import { LineChart, Line, Tooltip ,XAxis} from "recharts";

const Graph = ({ percentile }) => {

  const getIntroOfPage = (label) => {
    if (label === {percentile}) {
      return "Page A is about men's clothing";
    }
    return "";
  };

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p className="label">{`${label} : ${payload[0].value}`}</p>
          <p className="intro">{getIntroOfPage(label)}</p>
          <p className="desc">Anything you want can be displayed here.</p>
        </div>
      );
    }
  
    return null;
  };

  const data = [
 {
   y:20
 },
 {
  y:50
},
{
  y:30
}
  ];

  return (
    <div className="graph">
      <LineChart width={600} height={300} data={data}>
        <Line type="monotone" dataKey="y" stroke="#8884d8" />

        <XAxis dataKey={[0,`${percentile}`,100]} />
        <Tooltip content={<CustomTooltip />} />
      </LineChart>
    </div>
  );
};

export default Graph;
