import React, { useContext } from 'react';
import {MyContext} from "./Context"

export default function MyConsumer() {
  const { state, setState } = useContext(MyContext);

  return (
    <div>
      <p>{state.message}</p>
      <button onClick={() => setState({ ...state, count: state.count + 1 })}>
        Click me ({state.count})
      </button>
    </div>
  );
}


function MyConsumer2() {
  return (
    <MyContext.Consumer>
      {({ state, setState }) => (
        <div>
          <p>{state.message}</p>
          <button onClick={() => setState({ ...state, count: state.count + 1 })}>
            Click me ({state.count})
          </button>
        </div>
      )}
    </MyContext.Consumer>
  );
}
