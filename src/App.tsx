import React, { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import { Provider } from "react-redux";

import { routes } from "./route/route";
import store from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Suspense fallback={null}>{renderRoutes(routes)}</Suspense>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
