import _ from 'lodash'; // lodash used for helper sum function
// _ just represents lodash
import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';
// Sparklines library will be used to create the graph
// Sparklines just need an array of numbers to show graph

function average(data) {
  return _.round(_.sum(data)/data.length);
}

export default (props) => {
  return (
    <div>
      <Sparklines svgHeight={120} svgWidth={180} data={props.data}>
        <SparklinesLine color={props.color}/>
        <SparklinesReferenceLine type='avg' />
      </Sparklines>
      <div>{average(props.data)} {props.units}</div>
    </div>
  );
}
