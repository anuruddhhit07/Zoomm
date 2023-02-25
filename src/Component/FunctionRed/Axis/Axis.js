import React ,{ useRef,useEffect }from "react";
import * as d3 from "d3";



const Axis = (props) => {
    const ref = useRef(null);


    useEffect(()=>{
        renderAxis()
    },[props.scale])

    const renderAxis=()=> {

       
        if (props.orient=='bottom'){
            var AxisGenerator = d3.axisBottom(props.scale).ticks(5)
            // .tickFormat(multiFormat())
        }

        if (props.orient=='top'){
            var AxisGenerator = d3.axisTop(props.scale) 
        }

        if (props.orient=='left'){
            var AxisGenerator = d3.axisLeft(props.scale) 
        }

        if (props.orient=='right'){
            var AxisGenerator = d3.axisRight(props.scale) 
        }
           
        
        var axis =d3.select(ref.current).call(AxisGenerator); 
      }



    //   const getFormat=()=> {
    //     if (26 < 25) {
    //       return d3.timeFormat('%H:%M');
    //     } else {
    //       return d3.timeFormat('%d/%m %H:%M');
    //     }
    //   }

    // const multiFormat=(date)=> {
    //     return (d3.timeSecond(date) < date ? formatMillisecond
    //         : d3.timeMinute(date) < date ? formatSecond
    //         : d3.timeHour(date) < date ? formatMinute
    //         : d3.timeDay(date) < date ? formatHour
    //         : d3.timeMonth(date) < date ? (d3.timeWeek(date) < date ? formatDay : formatWeek)
    //         : d3.timeYear(date) < date ? formatMonth
    //         : formatYear)(date);
    //   }

    return <g className={props.class} ref={ref} transform={props.translate}></g>;

}

export default Axis;