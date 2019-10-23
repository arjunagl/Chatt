import styled from 'styled-components';

const FriendBlockStyle = {
  margin: '10px',
  gridArea: 'sidebar'
};

const FriendsContainerBlock = styled.div`
   {
    overflow-y: scroll;
    border: solid;
  }
`;
// eslint-disable-next-line import/prefer-default-export
export { FriendBlockStyle, FriendsContainerBlock };
