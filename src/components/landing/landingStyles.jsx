import styled from 'styled-components';

const LandingBlockStyle = styled.div`
  display: grid;
  outline: solid;
  grid-template-columns: 1fr 2fr 2fr;
  height: 95vh;
  grid-template-areas:
    'header header header'
    'sidebar content content'
    'footer footer footer';

  @media screen and (max-width: 645px) {
    grid-template-areas:
      'content content content'
      'content content content'
      'content content content';
  }
`;

const HeaderBlockContainer = styled.div`
  text-align: center;
  grid-area: header;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 25px;
  @media screen and (max-width: 645px) {
    display: none;
  }
`;

const MessagingBlockContainerStyle = {
  gridArea: 'content',
  outline: 'solid',
  padding: '10px'
};

const FriendsContainerStyle = {
  gridArea: 'sidebar',
  outline: 'solid'
};

export {
  LandingBlockStyle,
  MessagingBlockContainerStyle,
  HeaderBlockContainer,
  FriendsContainerStyle
};
