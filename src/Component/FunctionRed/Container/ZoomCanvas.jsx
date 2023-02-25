import React, { useRef,useEffect,useState } from "react";
import * as d3 from "d3";
import "./styles.scss";
import { useSelector, useDispatch } from "react-redux";

import {
  select,
  pointers,
  mean,
  scaleLinear,
  zoomIdentity,
  max,
  zoom,
  zoomTransform
} from "d3";

const ZoomCanvas = ({xScale,yScale,changeh, children }) => {
  // const ref = useRef(null);
  console.log(xScale);
  const ref = useRef(null);
  const { width, height, margin } = useSelector(
    (state) => state.dimensionReducer
  );
  // props.onChange(event.target.value)

  const [currentGlobalZoomState, setCurrentGlobalZoomState] = useState(
    zoomIdentity
  );
  const [currentYZoomState, setCurrentYZoomState] = useState(zoomIdentity);
  const [currentXZoomState, setCurrentXZoomState] = useState(zoomIdentity);

  console.log("objectooooooo",xScale(0))

  // if (currentGlobalZoomState) {
  //   console.log('currentXZoomState',currentXZoomState,currentGlobalZoomState);
  //   const newXScale = currentXZoomState.rescaleX(xScale);
  //   xScale.domain(newXScale.domain());
  // }

  if (currentGlobalZoomState) {
    const newYScale = currentYZoomState.rescaleY(yScale);
    yScale.domain(newYScale.domain());
  }



  useEffect(() => {
    
        // updatesvg()
        zoomsvg()

  }, [currentXZoomState,
    currentYZoomState,
    currentGlobalZoomState,
    // xScale,
    // yScale
  ]);


  const zoomsvg=()=>{
    console.log("gdfhgfhfgjnghmghmggh")
    const widhth2=width-margin.left-margin.right
    const height2=width-margin.top-margin.bottom

    const svg = select(ref.current);
    const center = (event, target) => {
      if (event.sourceEvent) {
        const p = pointers(event, target);
        return [mean(p, (d) => d[0]), mean(p, (d) => d[1])];
      }
      return [widhth2 / 2, height2 / 2];
    };

    
    const zoomed2 = (event) => {
 
      console.log("evennnnnnnnnnnt",event.transform);

      const { k: newK, x: newX, y: newY } = event.transform;
      const { k: prevK, x: prevX, y: prevY } = currentGlobalZoomState;
      const point = center(event, svg);
      console.log('pointfddgfdgfd',point);

      const isZoomingX =
        point[0] > margin.left + 50 && point[0] < widhth2;
      const isZoomingY =
        point[1] > margin.top && point[1] < height2 - 50;
        isZoomingX &&
        setCurrentXZoomState(
          currentXZoomState
            .translate((newX - prevX) / prevK, 0)
            .scale(newK / prevK)
        );
      isZoomingY &&
        setCurrentYZoomState(
          currentYZoomState
            .translate(0, (newY - prevY) / prevK)
            .scale(newK / prevK)
        );

      // Keeping track of the previous transform object
      setCurrentGlobalZoomState(event.transform);
      // console.log("firstfgdgffg",changeh)
      changeh(event.transform)


    }

    const zoomGlobal = zoom()
      .scaleExtent([0.1, 500])
      .on("zoom",zoomed2)



      // console.log("zooooo",zoomGlobal)
      svg.call(zoomGlobal);
      // console.log("svggggg cllllllllllll")

  }



  const childrenWithProps = React.Children.map(children, child => {
    // Checking isValidElement is the safe way and avoids a
    // typescript error too.

    const newXScale = currentXZoomState.rescaleX(xScale);
    xScale.domain(newXScale.domain());

    console.log("object",xScale(0));
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { xScale:xScale,yScale:yScale });
    }
    return child;
  });





  const updatesvg = () => {
    // console.log(this.props);
    const zoomed = (event) => {
      const currentTransform = event.transform;
      d3.select(ref.current).select("g").attr("transform", currentTransform);
    };
    const zoom = d3.zoom().scaleExtent([1, 10]).on("zoom", zoomed);
    d3.select(ref.current).call(zoom);
  };

  return (
    <>
      {/* {this.props.xScale !==null && this.props.xScale(1387212570000)} */}

      <svg className="mainsvg" id={"bg1"} height={height} width={width}>
        <g ref={ref} transform={`translate(${margin.left}, ${margin.top})`}>
          <rect id={"listrect"} height={height-margin.top-margin.bottom} width={width-margin.left-margin.right} fill="none" pointerEvents="all" />

          <g>{childrenWithProps}</g>
        </g>
      </svg>
    </>
  );
};

export default ZoomCanvas;
