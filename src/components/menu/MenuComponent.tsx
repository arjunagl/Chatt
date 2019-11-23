import React from 'react';
import * as MenuComponentStyles from './MenuComponentStyles';
// @ts-ignore
import FriendsComponent from '../friends';

const menuComponent = React.memo(() => {
  return (
    <MenuComponentStyles.menuBlock>
      <FriendsComponent></FriendsComponent>
    </MenuComponentStyles.menuBlock>
  );
});

export default menuComponent;
