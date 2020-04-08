const initialState = {
  from: 'adam',
  to: 'padam',
  chatMessages: []
};
export default function messageReducer(state = initialState, action) {
  switch (action.type) {
    case 'LOAD_MESSAGES_DONE':
      return { ...state, chatMessages: action.messages };
    case 'SEND_MESSAGE_DONE': {
      const newMessage = {
        order: state.chatMessages.length + 1,
        direction: 'Outgoing',
        date: '',
        from: action.from,
        to: action.to,
        message: action.message
      };
      const messages = Array.from(state.chatMessages);
      messages.push(newMessage);
      const newState = { ...state, chatMessages: messages };
      return newState;
    }
    case 'INCOMING_MESSAGE': {
      const newMessage = {
        order: state.chatMessages.length + 1,
        direction: 'Incoming',
        date: '',
        from: action.from,
        to: action.to,
        message: action.Message
      };
      const messages = Array.from(state.chatMessages);
      messages.push(newMessage);
      const newState = { ...state, chatMessages: messages };
      return newState;
    }
    default:
      return state;
  }
}
