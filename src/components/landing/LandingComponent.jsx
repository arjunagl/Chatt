import React from 'react';
import MessagingComponent from 'Components/messaging';
import * as LandingPageStyles from './landingStyles';

const LandingComponent = () => {
  return (
    <LandingPageStyles.LandingBlockStyle>
      <div style={LandingPageStyles.HeaderBlockContainerStyle}>This is the header</div>
      <MessagingComponent style={LandingPageStyles.MessagingBlockContainerStyle} />
    </LandingPageStyles.LandingBlockStyle>
  );
};

export default LandingComponent;
