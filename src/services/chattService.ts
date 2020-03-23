declare const CHATT_SERVER_URL: string;

type SendMessageType = {
  to: string;
  message: string;
};

const newChattConnection = (clientId: string) => {
  const webSocketConnection = new WebSocket(`${CHATT_SERVER_URL}/${clientId}`);
  console.log('Attempting Connection...');

  webSocketConnection.onopen = () => {
    console.log('Successfully Connected');
    // webSocketConnection.send('Hi From the Client!');
  };

  webSocketConnection.onclose = event => {
    console.log('Socket Closed Connection: ', event);
    webSocketConnection.send('Client Closed!');
  };

  webSocketConnection.onerror = event => {
    console.log(`Error establishing connection = ${JSON.stringify(event)}`);
  };

  return {
    sendMessage: (message: SendMessageType) => {
      webSocketConnection.send(JSON.stringify({ details: { ...message }, command: 'SendMessage' }));
    }
  };
};

export default newChattConnection;
