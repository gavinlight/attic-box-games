import React from 'react';
import PT from 'prop-types';
import { Switch, Route, withRouter } from 'react-router-dom';
import GlobalStyle from 'styles';

import Loader from 'common/Loader';
import Profile from 'modules/Profile';

const App = ({ location }) => (
  <main>
    <GlobalStyle />
    <Loader path={location.pathname}>
      <Switch>
        <Route path="/member/:name" component={Profile} exact />
      </Switch>
    </Loader>
  </main>
);

App.propTypes = {
  location: PT.shape({
    pathname: PT.string,
  }),
};

export default withRouter(App);
