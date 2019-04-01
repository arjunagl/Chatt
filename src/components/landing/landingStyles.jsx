import styled from 'styled-components';

const LandingBlockStyle = styled.div`
  display: grid;
  outline: solid;
  grid-template-columns: 1fr 2fr 2fr;
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
  gridArea: 'content'
};

const HeaderBlockContainerStyle = {
  gridArea: 'header'
};

export { LandingBlockStyle, MessagingBlockContainerStyle, HeaderBlockContainerStyle };
