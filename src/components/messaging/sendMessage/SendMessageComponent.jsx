import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';
import * as SendMessageComponentStyles from './SendMessageComponentStyles';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  button: {
    borderRadius: '50px',
    marginLeft: '10px'
  }
}));

const SendMessageComponent = React.memo(({ ...props }) => {
  const classes = useStyles();
  const [userInput, setUserInput] = useState({
    messageToSend: { value: '', valid: false }
  });

  const messageFrom = useSelector(state => state.chatt.messages.from);
  const messageTo = useSelector(state => state.chatt.messages.to);
  const dispatch = useDispatch();

  // Enter handler for the input component
  const submitMessage = event => {
    if (event.key === 'Enter') {
      const { value: message, valid } = userInput.messageToSend;
      if (!valid) return;
      dispatch({ type: 'SEND_MESSAGE', messageFrom, messageTo, message });
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
      <Button variant="contained" color="primary" className={classes.button}>
        Send
      </Button>
    </div>
  );
});

export default SendMessageComponent;
