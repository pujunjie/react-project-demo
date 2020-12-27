import { combineReducers } from "redux";

import { reducer as testReducer } from "./reducer/reducer";

const rootReducer = combineReducers({
  testReducer,
});
export default rootReducer;
