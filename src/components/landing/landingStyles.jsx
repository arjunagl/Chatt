import styled from 'styled-components';

const LandingBlockStyle = styled.div`
  display: grid;
  outline: solid;
  grid-template-columns: 1fr 2fr 2fr;
  height: 100vh;
  grid-template-areas:
    'header header header'
    'sidebar content content'
    'footer footer footer';

  @media screen and (max-width: 645px) {
    grid-template-areas:
      'header header header'
      'content content content'
      'footer footer footer';
  }

  .sidebar {
    display: none;
  }
`;

const MessagingBlockContainerStyle = {
  gridArea: 'content',
  borderLeft: 'solid',
  borderTop: 'solid',
  padding: '10px'
};

const FriendsContainerStyle = {
  gridArea: 'sidebar',
  borderTop: 'solid'
};

const HeaderBlockContainerStyle = {
  gridArea: 'header',
  width: '100%',
  textAlign: 'center',
  marginBottom: '10px',
  justifySelf: 'center'
};

export {
  LandingBlockStyle,
  MessagingBlockContainerStyle,
  HeaderBlockContainerStyle,
  FriendsContainerStyle
};
