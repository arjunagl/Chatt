import React from 'react';
import * as MenuComponentStyles from './MenuComponentStyles';

const menuComponent = React.memo(() => {
  return <MenuComponentStyles.menuBlock>This is the menu</MenuComponentStyles.menuBlock>;
});

export default menuComponent;
