import React from 'react';
import { connect } from 'react-redux';
import * as MenuComponentStyles from './MenuComponentStyles';
// @ts-ignore
import FriendsComponent from '../friends';
import FriendSearchComponet from '../friends/search';
import { MenuState } from './types';

interface MenuComponentProps {
  displayMenu: boolean;
}

const menuComponent = React.memo(({ displayMenu }: MenuComponentProps) => {
  // tslint:disable-next-line: variable-name
  const MenuBlock = MenuComponentStyles.menuBlock(displayMenu);
  return (
    <MenuBlock>
      <FriendSearchComponet></FriendSearchComponet>
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
