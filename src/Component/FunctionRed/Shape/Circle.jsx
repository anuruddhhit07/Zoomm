import React ,{ useRef,useEffect }from "react";
import * as d3 from "d3";



const Circle = () => {
    const ref = useRef(null);
    // d3.select(ref)
    //       .attr("fill", "red")
    //       .attr("r",15)
    //       .attr("cx", 50)
    //       .attr("cy", 50)

    useEffect(()=>{
        if ( ref.current){
            const svg = d3.select(ref.current);
            svg.attr("fill", "red")
          .attr("r",15)
          .attr("cx", 50)
          .attr("cy", 50)

        }

    },[])


    return <circle ref={ref} />
}

export default Circle;
