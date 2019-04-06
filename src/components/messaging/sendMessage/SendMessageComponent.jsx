import React from 'react';

const SendMessageComponent = React.memo(props => {
  return (
    <div {...props}>
      <input type="text" />
    </div>
  );
});

export default SendMessageComponent;
