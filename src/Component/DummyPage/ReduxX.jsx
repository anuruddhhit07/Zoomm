import React, { createContext, useContext, useReducer } from "react";
import * as d3 from "d3";

// Define the initial state for the reducer
const initialState = {
  data: [],
  xScale: null,
  yScale: null,
};

// Define the reducer function
function reducer(state, action) {
  switch (action.type) {
    case "LOAD_DATA":
      return { ...state, data: action.payload };
    case "SET_X_SCALE":
      return { ...state, xScale: action.payload };
    case "SET_Y_SCALE":
      return { ...state, yScale: action.payload };
    default:
      return state;
  }
}

// Create a context for the visualization state and dispatch function
export const VisualizationContext = createContext();

// Create a component to wrap the visualization and provide the context
function Visualization({ data }) {
  // Use the reducer to manage state
  const [state, dispatch] = useReducer(reducer, initialState);

  // Load the data and update the state
  React.useEffect(() => {
    dispatch({ type: "LOAD_DATA", payload: data });
  }, [data]);

  // Create the scales and update the state
  React.useEffect(() => {
    const xScale = d3.scaleLinear()
      .domain([0, d3.max(state.data, d => d.x)])
      .range([0, 500]);
    dispatch({ type: "SET_X_SCALE", payload: xScale });

    const yScale = d3.scaleLinear()
      .domain([0, d3.max(state.data, d => d.y)])
      .range([0, 500]);
    dispatch({ type: "SET_Y_SCALE", payload: yScale });
  }, [state.data]);

  // Render the visualization using the state
  return (
    <VisualizationContext.Provider value={{ state, dispatch }}>
      <svg width={500} height={500}>
        {state.data.map((d, i) => (
          <circle
            key={i}
            cx={state.xScale(d.x)}
            cy={state.yScale(d.y)}
            r={5}
            fill="blue"
          />
        ))}
      </svg>
    </VisualizationContext.Provider>
  );
}

// Create a component to consume the visualization context
//function Controls() {
//  const { state, dispatch } = useContext(VisualizationContext);

  // Add a button to randomly add data to the visualization
  //function handleAddData() {
   // const newData = state.data.concat({
    //  x: Math.random() * 100,
  //    y: Math.random() * 100,
//    });
////    dispatch({ type: "LOAD_DATA", payload: newData });
//  }

//  return (
 //   <div>
//      <button onClick={handleAddData}>Add Data</button>
///    </div>
//  );
//}

//function MainApp() {
    
  ////  const VisualizationContext = createContext();

   // const { state, dispatch } = useContext(VisualizationContext);
    
    
 // return (
   // <>
 //     <h1>Hello World!</h1>
 //     <p>This is some content insid



export {Visualization}
