import { create } from "domain";

/** thunk
  import { createStore, applyMiddleware } from "redux";
  import thunk from "redux-thunk";
  import logger from "redux-logger";
  
  import reducer from "./rootReducer";
  
  const store = createStore(reducer, applyMiddleware(thunk, logger));
  
  export default store;
 */

import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";

import saga from "./saga/saga";

import reducer from "./rootReducer";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer, applyMiddleware(sagaMiddleware, logger));

sagaMiddleware.run(saga);

export default store;
