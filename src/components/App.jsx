import React, { lazy, Suspense } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import GlobalStyle from 'styles';

import Loader from 'common/Loader';

const Home = lazy(() => import('modules/Home'));

const App = () => (
  <main>
    <GlobalStyle />
    <Suspense fallback={<Loader />}>
      <Switch>
        <Route path="/" component={Home} exact />
      </Switch>
    </Suspense>
  </main>
);

export default withRouter(App);
