import React from 'react';

import Container from 'common/Container';

import { AboutContainer, Heading, Text } from './styled';

const Header = () => (
  <Container>
    <AboutContainer>
      <Heading>About</Heading>
      <Text>
        <p>Ik ben Gavin Ligthart, digital brand manager, webdeveloper en consultant bij Attic Box Studio. Sinds 2014 help ik Attic Box bij alles web en design. Ik ben afgestudeerd aan CMD Amsterdam in de zomer van 2015, en werk sinds dien in het veld als creative developer en technical lead.         </p>
        <p>My name is Gavin Ligthart, digital brand manager, webdeveloper and consultant at Attic Box Studio. I've been helping Attic Box with everything regarding to brand, website and design since 2014. I graduated from CMD Amsterdam in the summer of 2015 and I'm currently working as a creative developer and technical lead.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In risus elit, aliquam sed justo nec, gravida placerat augue. Proin eget fringilla ante. Maecenas id enim ac ligula ultricies vehicula quis vitae neque. Ut vitae tempus metus. Donec dapibus non odio ultrices tincidunt. Nunc sodales enim id nisi dapibus accumsan. Maecenas ac tellus lobortis, hendrerit elit eleifend, rutrum risus. Sed placerat arcu et ipsum malesuada dignissim.  Maecenas ac tellus lobortis, hendrerit elit eleifend, rutrum risus. Sed placerat arcu et ipsum malesuada dignissim. Duis iaculis volutpat commodo. Proin tempor dignissim turpis sed consectetur. Vestibulum ullamcorper dui ac dolor efficitur pretium. Morbi consectetur nisl id pretium vehicula.</p>
      </Text>
    </AboutContainer>
  </Container>
);

export default Header;
