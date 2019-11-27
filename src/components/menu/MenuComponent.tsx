import React from 'react';
import { connect } from 'react-redux';
import * as MenuComponentStyles from './MenuComponentStyles';
// @ts-ignore
import FriendsComponent from '../friends';
import { MenuState } from './types';

const menuComponent = React.memo(props => {
  // tslint:disable-next-line: variable-name
  const MenuBlock = MenuComponentStyles.menuBlock(props.displayMenu);
  return (
    <MenuBlock>
      <FriendsComponent></FriendsComponent>
    </MenuBlock>
  );
});

const mapStateToProps = (state: MenuState) => {
  return {
    displayMenu: state.chatt.menu.menuDisplayed
  };
};

export default connect(
  mapStateToProps,
  null
)(menuComponent);
