import MessagingComponent from './MessagingComponent';
import watchAndLoadMessages from './messagingSaga';
import MessageService from './messageService';
import messageReducer from './messageReducer';

export default MessagingComponent;
export { watchAndLoadMessages, MessageService, messageReducer };
