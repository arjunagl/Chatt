import styled from 'styled-components';

const MessagingBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const IncomingMessageStyle = {
  margin: '10px 0',
  alignSelf: 'flex-start'
};

const OutgoingMessageStyle = {
  margin: '10px 0',
  alignSelf: 'flex-end'
};

const SendMessageStyle = {
  marginTop: '30px'
};

export { MessagingBlock, IncomingMessageStyle, OutgoingMessageStyle, SendMessageStyle };
