import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';


function LineChart({ data, xScale, yScale }) {
  const ref = useRef(null);
  
  
    // Define line generator
    const line = d3.line()
      .x((d, i) => xScale(d.time))
      .y(d => yScale(d.close))
      //.curve(d3.curveMonotoneX);
  

  useEffect(() => {
  //  const svg = d3.select(svgRef.current);

    // Define x and y scales
  //  const xScale = d3.scaleLinear()
   //   .domain([0, data.length - 1])
  //    .range([0, width]);

    //const yScale = d3.scaleLinear()
     // .domain([0, d3.max(data)])
     // .range([height, 0]);

    // Define line generator
   // const line = d3.line()
     // .x((d, i) => xScale(d.time))
     // .y(d => yScale(d.close))
    //  .curve(d3.curveMonotoneX);


if(ref.current){
    // Draw line
    const svg = d3.select(ref.current)
   
    // Define line generator
   // const line = d3.line()
     // .x((d, i) => xScale(d.time))
    //  .y(d => yScale(d.close))
    //  .curve(d3.curveMonotoneX);
      
     svg.selectAll("*").remove()
    svg.append("path")
      .datum(data)
      .attr("class", "line")
      .attr("d", line);
}
      
      
      
      
  }, [data,xScale,yScale]);

  return (
    <g ref={ref} >
    </g>
  );
}
export default LineChart
