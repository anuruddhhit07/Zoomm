import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getData, setDim } from "./Action/data_ac";
import useController from "./Controller/Controller";
import ZoomCanvas from "./Container/ZoomCanvas";
import Circle from "./Shape/Circle";
import RendorXY from "./Axis/axisProp"
import {
  zoomIdentity
} from "d3";

const ChartContainer = () => {
  //this hook allows us to access the dispatch function
  const dispatch = useDispatch();
  //here we declare what we want to take from the redux store with the useSelector() hook
  //every time one of these properties is updated on the store, our component will re-render to reflect it
  const loading = useSelector((state) => state.dataReducer?.loading);
  const data = useSelector((state) => state.dataReducer?.data);
  const errorMessage = useSelector((state) => state.dataReducer.error);

  const { width, height, margin } = useSelector(
    (state) => state.dimensionReducer
  );

  const [userId, setUserId] = useState("");
  const [open, setOpen] = useState(false);
  const [globalzoom, setsetglobalzoom] = useState(zoomIdentity);



  // console.log("intilize data", data);

  const { xScale, yScale } = useController({ data, width, height, margin ,globalzoom});
  // console.log("intilize constorl", xScale, yScale);

  useEffect(() => {
    dispatch(getData());
  }, []);

  const setwidth = (wi_inc, hi_inc, opert) => {
    dispatch(setDim(wi_inc, hi_inc, opert));
  };

  const handleChangeZoom=(newValue)=> {
    setsetglobalzoom(newValue)
    console.log('globafgfglzoom',globalzoom)
  }

  return (
    <div>
      <div>
        <button onClick={() => setwidth(10, 10, 1)}>++</button>
        <button onClick={() => setwidth(10, 10, -1)}>--</button>
      </div>

      <ZoomCanvas xScale={xScale} yScale={yScale} changeh={handleChangeZoom}>
        <Circle key={'cir'} />
        <RendorXY 
        // xScale={xScale} yScale={yScale} 
        />
      </ZoomCanvas >
    </div>
  );
};

export default ChartContainer;

// {data.map((row, index) => (
//   <p key={index}>
//     {row.id} {xScale(row.time)} :: {yScale(row.close)}
//     {/* {row.time.date} {row.open} {row.high} {row.low} {row.close} */}
//   </p>
// ))}
