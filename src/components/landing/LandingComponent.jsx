import React from 'react';
import MessagingComponent from '../messaging';
import FriendsComponent from '../friends';
import * as LandingPageStyles from './landingStyles';

const LandingComponent = () => {
  return (
    <LandingPageStyles.LandingBlockStyle>
      <div style={LandingPageStyles.HeaderBlockContainerStyle}>This is the header</div>
      <MessagingComponent style={LandingPageStyles.MessagingBlockContainerStyle} />
      <FriendsComponent style={LandingPageStyles.FriendsContainerStyle} />
    </LandingPageStyles.LandingBlockStyle>
  );
};

export default LandingComponent;
