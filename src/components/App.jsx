import React, { lazy, Suspense } from 'react';
import PT from 'prop-types';
import { Switch, Route, withRouter } from 'react-router-dom';
import GlobalStyle from 'styles';

import Loader from 'common/Loader';

const Profile = lazy(() => import('modules/Profile'));

const App = ({ location }) => (
  <main>
    <GlobalStyle />
    <Suspense fallback={<Loader />}>
      <Loader path={location.pathname}>
        <Switch>
          <Route path="/member/:name" component={Profile} exact />
        </Switch>
      </Loader>
    </Suspense>
  </main>
);

App.propTypes = {
  location: PT.shape({
    pathname: PT.string,
  }),
};

export default withRouter(App);
