const initialState = {
  chatMessages: []
};
export default function messageReducer(state = initialState, action) {
  switch (action.type) {
    case 'LOAD_MESSAGES_DONE':
      return { chatMessages: action.messages };
    default:
      return state;
  }
}
