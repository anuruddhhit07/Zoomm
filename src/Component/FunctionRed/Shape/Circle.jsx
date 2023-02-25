import React ,{ useRef,useEffect }from "react";
import * as d3 from "d3";



const Circle = ({data,xScale,yScale}) => {
    const ref = useRef(null);
    // d3.select(ref)
    //       .attr("fill", "red")
    //       .attr("r",15)
    //       .attr("cx", 50)
    //       .attr("cy", 50)

    useEffect(()=>{
        // console.log("dataaaaaaaa",data)
        if ( ref.current ){
            if (data.length>0){
            const svg = d3.select(ref.current);
            svg.attr("fill", "red")
          .attr("r",15)
          .attr("cx", xScale(data[0].time))
          .attr("cy", yScale(150))
            }
        }

    },[xScale,yScale])


    return <circle ref={ref} />
}

export default Circle;
