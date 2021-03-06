import React from 'react';
import { withSiteData, Link } from 'react-static';
import styled from 'react-emotion';
import { Images } from '../../assets';
import content from '../../content';
import colors from '../../styles/colors';

const HOME = content('pages.home');

const Section = styled.div`
  width: 100%;
  height: 94vh;
  background: ${colors.RED};
  @media (min-width: 576px) {
    background: url(${Images.vancouverNight}) no-repeat;
    height: 30vh;
    display: flex;
  }
`;

const Container = styled.div`
  padding: 2em 1em;
  background-image: ${colors.RED};
  @media (min-width: 576px) {
    max-width: 976px;
    margin: auto;
  }
`;

const ActionButtons = styled.div`
  font-size: 1.2em;
  padding-top: 1em;
  text-align: center;
  @media (min-width: 576px) {
    padding-top: 1em;
    padding-left: 1em;
    text-align: right;
  }
`;

const Signup = styled.button`
width: 80%;
margin: auto;
text-transform: uppercase;
transition: background-color 200ms ease, color 200ms ease;
background-color: ${colors.RED};
color: ${colors.WHITE};
border: 1px solid ${colors.WHITE};
padding: 1rem 2rem;
margin-bottom: 0.5em;
border-radius: 5px;
&:hover {
  background-color: ${colors.WHITE};
  color: ${colors.RED};
  border: 1px solid ${colors.RED};
}
@media (min-width: 576px) {
  background: ${colors.RED};
  color: white;
  width: 100%;
  margin-bottom: 30px;
  &:hover {
    background-color: white;
    color: ${colors.DARKBLUE};
    border: 1px solid ${colors.BLUE};
  }
}
`;

const Contact = styled.button`
width: 80%;
margin: auto;
background: ${colors.DARKBLUE};
transition: background-color 200ms ease, color 200ms ease;
color: ${colors.WHITE};
font-size: 1.1em;
letter-spacing: 1px;
border-radius: 5px;
border: 1px solid ${colors.WHITE};
padding: 1rem 2rem;
&:hover {
  background-color: white;
  color: ${colors.DARKBLUE};
}
@media (min-width: 576px) {
  width: 100%;
}
`;

const MobileImage = styled.img`
  width: 100%;
  margin-top: 2em;
  @media (min-width: 576px) {
    display: none;
  }
`

const LandingText = styled.div`
  text-align: center;
  font-size: 1.3em;
  color: white;
  margin-top: 0.7em;
  @media (min-width: 576px) {
    display: none;
  }
`

export default withSiteData(() => {
  return (
  <Section>
    <Container>
      <ActionButtons>
        <Link to="/assessment">
          <Signup>Free Assessment</Signup>
        </Link>
        <br />
        <Link to="/contact">
          <Contact>Contact Us</Contact>
        </Link>
      </ActionButtons>
      <MobileImage src={Images.vancouverNightSmall}/>
      <LandingText>For help and advice on Canadian immigration processes</LandingText>
    </Container>
  </Section>
)
})
