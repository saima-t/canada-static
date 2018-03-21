import React from 'react';
import { withSiteData, Link } from 'react-static';
import styled, { css } from 'react-emotion';
import { map } from 'lodash';
import content from '../../content';
import { Section, Container } from '../commons';
import { Icons } from '../../assets';
import colors from '../../styles/colors';

const PURECLASSES = {
  grid: 'pure-g',
  square: 'pure-u-1 pure-u-md-1-2 pure-u-lg-1-3',
};

const Grid = ({ items }) => (
  <FeatureGrid className={PURECLASSES.grid}>
    {map(items, ({ heading, path }) => (
        <Square key={heading} className={PURECLASSES.square}>
          <Icon src={Icons.leaf} alt="maple leaf" />
          <Link to={`/${path}`}>
            <Heading>{heading}</Heading>
          </Link>
        </Square>

    ))}
  </FeatureGrid>
);

const FeatureGrid = styled.div`
  margin-bottom: 3em;
`;

const Square = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 90%;
  margin: 20px auto 0;
  color: ${colors.RED};
  @media (min-width: 576px) {
    margin-top: 50px;
    padding: 1em;
    max-width: 100%;
  }
`;

const Icon = styled.img`
  border-radius: 10%;
  width: 50px;
  @media (min-width: 576px) {
    width: 100px;
  }
`;

const Heading = styled.div`
  text-transform: uppercase;
  font-size: 1.2em;
  margin-top: 5px;
  font-weight: bold;
  opacity: 0.7;
`;

export default withSiteData(() => {
  const FEATURES = content('pages.home.features');
  return (
    <Section>
      <Container>
        <Grid className={PURECLASSES.grid} items={FEATURES} />
      </Container>
    </Section>
  );
});
