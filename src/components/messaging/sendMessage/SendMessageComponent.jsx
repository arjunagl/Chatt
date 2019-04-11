import React, { useState } from 'react';
import { connect } from 'react-redux';
import * as SendMessageComponentStyles from './SendMessageComponentStyles';

const SendMessageComponent = React.memo(({ messageFrom, messageTo, sendMessage, ...props }) => {
  const [userInput, setUserInput] = useState({
    messageToSend: { value: '', valid: false }
  });

  // Enter handler for the input component
  const submitMessage = event => {
    if (event.key === 'Enter') {
      const { value: message, valid } = userInput.messageToSend;
      if (!valid) return;
      sendMessage(message, messageFrom, messageTo);
      setUserInput({ messageToSend: { value: '', valid: false } });
    }
  };

  const setMessageToSend = event => {
    setUserInput({
      ...userInput,
      messageToSend: { valid: event.target.value.trim() !== '', value: event.target.value }
    });
  };

  const {
    messageToSend: { value }
  } = userInput;

  return (
    <div {...props}>
      <input
        type="text"
        style={SendMessageComponentStyles.SendMessageInputStyle}
        onKeyPress={submitMessage}
        onChange={setMessageToSend}
        value={value}
      />
    </div>
  );
});

const mapStateToProps = state => ({
  messageFrom: state.chatt.messages.from,
  messageTo: state.chatt.messages.to
});

const mapDispatchToProps = dispatch => ({
  sendMessage: (message, from, to) => dispatch({ type: 'SEND_MESSAGE', from, to, message })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SendMessageComponent);
