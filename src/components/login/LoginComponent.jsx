import React from 'react';

const loginPageComponent = () => {
  const divStyle = {
    margin: '40px',
    border: 'solid',
    display: 'flex',
    'flex-direction': 'column'
  };

  return (
    <div style={divStyle}>
      <div>Username or email address</div>
      <input type="text" />
      <div>Password</div>
      <input type="password" />
      <input type="submit" value="Login" />
    </div>
  );
};

export default loginPageComponent;
