import styled from 'styled-components';

const MessagingBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const IncomingMessageStyle = {
  alignSelf: 'flex-start'
};

const OutgoingMessageStyle = {
  alignSelf: 'flex-end'
};

export { MessagingBlock, IncomingMessageStyle, OutgoingMessageStyle };
