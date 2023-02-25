import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../Reducer";

const initialState = {};
const middleware = [thunk];


const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(...middleware),
     // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );

export default function configureStore() {
    // const store = createStore(rootReducer, undefined, applyMiddleware(thunk));
    return store;
  }



// export default store;
