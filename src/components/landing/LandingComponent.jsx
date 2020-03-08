import React from 'react';
import { connect } from 'react-redux';
import MessagingComponent from '../messaging';
import FriendsComponent from '../friends';
import { useEffect } from 'react';
import { MenuComponent } from '../menu';
import * as LandingPageStyles from './landingStyles';

const LandingComponent = ({ toggleMenu: dispatchToggleMenuCommand, establishconnection }) => {
  useEffect(() => {
    establishconnection();
  });

  const toggleMenu = () => {
    dispatchToggleMenuCommand();
  };
  return (
    <LandingPageStyles.LandingBlockStyle>
      <LandingPageStyles.HeaderBlockContainer>Chatt</LandingPageStyles.HeaderBlockContainer>
      <LandingPageStyles.MobileHeaderBlockContainer onClick={toggleMenu}>
        ☰
      </LandingPageStyles.MobileHeaderBlockContainer>
      <MessagingComponent style={LandingPageStyles.MessagingBlockContainerStyle} />
      <MenuComponent></MenuComponent>
    </LandingPageStyles.LandingBlockStyle>
  );
};

const mapDispatchToProps = dispatch => ({
  toggleMenu: () => dispatch({ type: 'TOGGLE_MENU' }),
  establishconnection: () => dispatch({ type: 'ESTABLISH_CONNECTION' })
});

export default connect(null, mapDispatchToProps)(LandingComponent);
