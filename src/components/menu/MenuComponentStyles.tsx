import styled from 'styled-components';

const menuBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-area: sidebar;
  overflow-y: scroll;
  outline: solid;
  @media screen and (max-width: 645px) {
    display: none;
  }
`;

export { menuBlock };
