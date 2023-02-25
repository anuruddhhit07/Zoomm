import React, { useRef,useEffect } from "react";
import * as d3 from "d3";

import { useSelector, useDispatch } from "react-redux";
import Axis from "./Axis";

const RendorXY= (props) => {
    

    const { width, height, margin } = useSelector(
        (state) => state.dimensionReducer
      );

  const xSettings = {
    translate: `translate(0, ${height-margin.bottom-margin.top})`,
    scale: props.xScale,
    orient: "bottom",
    class:"x-axis"
  };
  const ySettings = {
    translate: `translate(${0}, 0)`,
    scale: props.yScale,
    orient: "left",
    class:"y-axis"
  };
  
  console.log('propssss',props,xSettings,props.xScale(0));


  return (
    <g className="xy-axis">
      <Axis {...xSettings} />
      <Axis {...ySettings} />
    </g>
  );
};

export default RendorXY;

