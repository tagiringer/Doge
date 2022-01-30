import { Route, Switch, BrowserRouter } from "react-router-dom";
import React, { Suspense } from "react";
import ResultsDetails from "./components/ResultsDetails.js";

export const Routes = {
  1: {
    component: React.lazy(() => import(ResultsDetails)),
    path: "/1",
  },
};

const AppRoutes = () => (
  <BrowserRouter>
    <Suspense fallback={<div>test366</div>}>
      <Switch>
        {Object.entries(Routes).map(([key, { path, component }]) => (
          <Route exact {...{ component, key, path }}></Route>
        ))}
        {/* <Route key="not found" path="*" component={<div>ahhhhhhhh</div>}></Route> */}
      </Switch>
    </Suspense>
  </BrowserRouter>
);

export default AppRoutes;
