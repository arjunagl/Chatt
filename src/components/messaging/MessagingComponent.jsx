import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import MessageComponent from 'Components/messaging/message';
import * as MessagingComponentStyles from './MessagingComponentStyles';

const MessagingComponent = React.memo(({ loadMessages, messages, ...props }) => {
  useEffect(() => {
    loadMessages();
  }, []);

  // Sort the messages in order to display them
  messages.sort((firstMessage, secondMessage) => firstMessage.order >= secondMessage.order);
  const messagesToRender = messages.map(message => (
    <MessageComponent
      message={message}
      key={message.order}
      style={
        message.direction.trim().toLowerCase() === 'incoming'
          ? MessagingComponentStyles.IncomingMessageStyle
          : MessagingComponentStyles.OutgoingMessageStyle
      }
    />
  ));
  return (
    <MessagingComponentStyles.MessagingBlock {...props}>
      {messagesToRender}
    </MessagingComponentStyles.MessagingBlock>
  );
});

const mapDispatchToProps = dispatch => ({
  loadMessages: () => dispatch({ type: 'LOAD_MESSAGES' })
});

const mapStateToProps = state => {
  return {
    messages: state.chatt.messages.chatMessages
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MessagingComponent);
