import React, {useContext } from "react";
import {VisualizationContext} from "./ReduxX"

export default function Controls() {
  const { state, dispatch } = useContext(VisualizationContext);

  // Add a button to randomly add data to the visualization
  function handleAddData() {
    const newData = state.data.concat({
      x: Math.random() * 100,
      y: Math.random() * 100,
    });
    dispatch({ type: "LOAD_DATA", payload: newData });
  }

  return (
    <div>
      <button onClick={handleAddData}>Add Data</button>
    </div>
  );
}