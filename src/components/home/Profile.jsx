import React from 'react';
import { withSiteData, Link } from 'react-static';
import styled, { css } from 'react-emotion';
import { Section, Container } from '../commons';
import colors from '../../styles/colors';
import { Images } from '../../assets';

const ProfileWrapper = styled.div`
  text-align: center;
  margin: auto;
  font-size: 0.8em;
  @media (min-width: 576px) {
    font-size: 1em;
  }
`

const ProfileImage = styled.img`
  width: 50%;
  @media (min-width: 576px) {
    width: 30%;
  }
`
export default withSiteData(() => {
  return (
    <Section>
      <Container>
        <ProfileWrapper>
          <h1>Immigration consultant - Abrar Khan</h1>
          <ProfileImage src={Images.profile} alt='Abrar Khan' />
        </ProfileWrapper>
      </Container>
    </Section>
  );
});