import React, { useState, createContext } from "react";

export const MyContext = createContext();

const initialState = {
  data: [],
  xScale: null,
  yScale: null,
};

function MyProvider(props) {
  const [state, setState] = useState(initialState);

  return (
    <MyContext.Provider value={{ state, setState }}>
      {props.children}
    </MyContext.Provider>
  );
}
