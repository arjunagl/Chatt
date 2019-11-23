import styled from 'styled-components';

const FriendBlockStyle = {
  margin: '10px'
};

const FriendsContainerBlock = styled.div`
   {
    overflow-y: scroll;
    width: 100%;
  }
  @media screen and (max-width: 645px) {
    display: none;
  }
`;

export { FriendBlockStyle, FriendsContainerBlock };
