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

class MessageService {
  static loadMessages() {
    return mockMessages;
  }
}

export default MessageService;
