import styled from 'styled-components';

// const menuBlock = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   grid-area: sidebar;
//   overflow-y: hidden;
//   outline: solid;
//   @media screen and (max-width: 645px) {
//     grid-area: content;
//     width: 75%;
//     background-color: lightseagreen;
//   }
// `;

const menuBlock = (display: boolean) => {
  return styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    grid-area: sidebar;
    overflow-y: hidden;
    outline: solid;
    @media screen and (max-width: 645px) {
      grid-area: content;
      width: 75%;
      background-color: lightseagreen;
      display: ${display ? 'flex' : 'none'};
    }
  `;
};
export { menuBlock };
