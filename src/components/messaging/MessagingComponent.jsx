import React from 'react';

const MessagingComponent = props => {
  console.log(JSON.stringify(props));
  return <div {...props}>These are the messages</div>;
};

export default MessagingComponent;
