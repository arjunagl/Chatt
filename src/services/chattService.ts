declare const CHATT_SERVER_URL: string;

type SendMessageType = {
  from: string;
  to: string;
  message: string;
};

const newChattConnection = (clientId: string) => {
  console.log(CHATT_SERVER_URL);
  const webSocketConnection = new WebSocket(`${CHATT_SERVER_URL}/clientId=${clientId}`);
  console.log('Attempting Connection...');

  webSocketConnection.onopen = () => {
    console.log('Successfully Connected');
    webSocketConnection.send('Hi From the Client!');
  };

  webSocketConnection.onclose = event => {
    console.log('Socket Closed Connection: ', event);
    webSocketConnection.send('Client Closed!');
  };

  webSocketConnection.onerror = event => {
    console.log(`Error establishing connection = ${JSON.stringify(event)}`);
  };

  // const webSocketConnection = new WebSocket(`${CHATT_SERVER_URL}`);
  // webSocketConnection.onopen = () => {
  //   console.log('Successfully Connected');
  // };

  // webSocketConnection.onerror = function(evt) {
  //   console.error(`Error on establishing connection = ${JSON.stringify(evt)}`);
  // };

  return {
    sendMessage: (message: SendMessageType) => {
      webSocketConnection.send(JSON.stringify(message));
    }
  };
};

export default newChattConnection;
