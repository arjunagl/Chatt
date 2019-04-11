const mockMessages = [
  {
    order: 1,
    direction: 'Incoming',
    date: '2/4/2019',
    from: 'Adam',
    to: 'Padam',
    message: 'hello how are you doing'
  },
  {
    order: 2,
    direction: 'Outgoing',
    date: '2/4/2019',
    from: 'Padam',
    to: 'Adam',
    message: 'doing good, how are you'
  },
  {
    order: 3,
    direction: 'Incoming',
    date: '2/4/2019',
    from: 'Padam',
    to: 'Adam',
    message: 'doing good, thanks'
  }
];

const mockMessagesForFriend = [
  {
    order: 1,
    direction: 'Incoming',
    date: '2/4/2019',
    from: 'Adam',
    to: 'Padam',
    message: 'Ado'
  },
  {
    order: 2,
    direction: 'Outgoing',
    date: '2/4/2019',
    from: 'Padam',
    to: 'Adam',
    message: 'Ow yako'
  },
  {
    order: 3,
    direction: 'Incoming',
    date: '2/4/2019',
    from: 'Padam',
    to: 'Adam',
    message: 'monawada karanne ada'
  }
];

class MessageService {
  static loadMessages() {
    return mockMessages;
  }

  static loadMessagesFor(friend) {
    console.log(`loading messages for ${JSON.stringify(friend)}`);
    return mockMessagesForFriend;
  }

  static sendMessage(message, from, to) {
    console.log(`Sending message to ${(from, to, message)}`);
  }
}

export default MessageService;
