import React, { Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import moviesDetailsRoutes from "../../../../routes/MoviesDetailsRouters";

const Details = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          {moviesDetailsRoutes.map(({ path, exact, component }) => (
            <Route path={path} exact={exact} key={path} component={component} />
          ))}
        </Switch>
      </Suspense>
    </>
  );
};

export default Details;
