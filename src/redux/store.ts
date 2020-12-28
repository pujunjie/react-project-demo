import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

import rootReducer from './rootReducer';
import { IS_DEV } from '../common/constants';

let middleware: any = null;

if (IS_DEV) {
  const logger = createLogger();
  middleware = applyMiddleware(thunk, logger);
} else {
  middleware = applyMiddleware(thunk);
}
const store = createStore(rootReducer, middleware);

export default store;
