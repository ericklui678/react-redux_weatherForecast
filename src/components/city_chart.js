import React from 'react';
import { Sparklines, SparklinesLine } from 'react-sparklines';
// Sparklines library will be used to create the graph
// Sparklines just need an array of numbers to show graph

export default (props) => {
  return (
    <div>
      <Sparklines svgHeight={120} svgWidth={180} data={props.data}>
        <SparklinesLine color={props.color}/>
      </Sparklines>
    </div>
  );
}
