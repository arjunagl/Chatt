import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import * as MessageComponentStyles from './MessageComponentStyles';

const MessageComponent = React.memo(({ message, style, ...props }) => {
  // merge the styles together, the ones passed in as a property can override this one
  const mergedStyles = { ...MessageComponentStyles.MessageBlockStyle, ...style };
  return (
    <Card style={mergedStyles} {...props}>
      <CardContent>{message.message}</CardContent>
    </Card>
  );
});

export default MessageComponent;
