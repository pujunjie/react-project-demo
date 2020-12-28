import React, { Suspense } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

import store from './redux/store';
import Route from './route/route';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Suspense fallback={null}>{renderRoutes(Route)}</Suspense>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
