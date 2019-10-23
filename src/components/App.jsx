import React, { lazy, Suspense } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import GlobalStyle from 'styles';

const Profile = lazy(() => import('modules/Profile'));

const App = () => (
  <main>
    <GlobalStyle />
    <Suspense fallback={<span>loading</span>}>
      <Switch>
        <Route path="/member/:name" component={Profile} exact />
      </Switch>
    </Suspense>
  </main>
);

export default withRouter(App);
