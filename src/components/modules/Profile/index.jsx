import React from 'react';
import PT from 'prop-types';

import data from 'services/appData';
import Page from 'common/Page';

import Header from './components/Header';
import Links from './components/Links';
import About from './components/About';

const Profile = ({ match }) => {
  const profile = data.members.find((member) => member.slug === match.params.name);

  return profile && (
    <Page>
      <Header
        name={profile.name}
        title={profile.title}
        quote={profile.quote}
        image={profile.image}
      />
      <Links links={profile.links} />
      {profile.about && (
        <About about={profile.about} />
      )}
    </Page>
  );
};

Profile.propTypes = {
  match: PT.shape({
    params: PT.shape({
      slug: PT.string,
    }),
  }),
};

export default Profile;
