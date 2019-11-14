import React from 'react';
import MessagingComponent from '../messaging';
import FriendsComponent from '../friends';
import * as LandingPageStyles from './landingStyles';

const LandingComponent = () => {
  return (
    <LandingPageStyles.LandingBlockStyle>
      <div style={LandingPageStyles.HeaderBlockContainerStyle}>Chatt</div>
      <MessagingComponent style={LandingPageStyles.MessagingBlockContainerStyle} />
      <FriendsComponent style={LandingPageStyles.FriendsContainerStyle} />
    </LandingPageStyles.LandingBlockStyle>
  );
};

export default LandingComponent;
