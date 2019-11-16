import React from 'react';
import MessagingComponent from '../messaging';
import FriendsComponent from '../friends';
import * as LandingPageStyles from './landingStyles';

const LandingComponent = () => {
  return (
    <LandingPageStyles.LandingBlockStyle>
      <LandingPageStyles.HeaderBlockContainer>Chatt</LandingPageStyles.HeaderBlockContainer>
      <LandingPageStyles.MobileHeaderBlockContainer>☰</LandingPageStyles.MobileHeaderBlockContainer>
      <MessagingComponent style={LandingPageStyles.MessagingBlockContainerStyle} />
      <FriendsComponent style={LandingPageStyles.FriendsContainerStyle} />
    </LandingPageStyles.LandingBlockStyle>
  );
};

export default LandingComponent;
