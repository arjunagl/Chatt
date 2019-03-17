import React, { useState } from 'react';
import * as AppStyles from 'Styles/appStyles';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux';

const LoginBlockContainer = styled(AppStyles.BlockStyle)`
  display: inline-flex;
  border: solid;
  border-radius: 50px;
  padding: 50px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const loginButtonStyle = {
  margin: '40px',
  width: '100%'
};

const blockContainer = {
  margin: 'auto',
  textAlign: 'center'
};

const LoginPageComponent = ({ login }) => {
  const [formData, setFormData] = useState({ userNameOrEmail: '', password: '' });

  const updateFormData = event => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const { userNameOrEmail, password } = formData;

  const submitLogin = () => {
    console.log(`UserName: ${userNameOrEmail}, password: ${password}`);
    login(userNameOrEmail, password);
  };

  return (
    <div style={blockContainer} onSubmit={submitLogin}>
      <LoginBlockContainer>
        <TextField
          id="userNameOrEmail"
          name="userNameOrEmail"
          label="username or email"
          margin="normal"
          value={userNameOrEmail}
          onChange={e => updateFormData(e)}
        />
        <TextField
          id="password"
          name="password"
          label="password"
          type="password"
          margin="normal"
          value={password}
          onChange={e => updateFormData(e)}
        />
        <Button variant="contained" color="primary" style={loginButtonStyle} onClick={submitLogin}>
          <span>Log In </span>
        </Button>
      </LoginBlockContainer>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  login: (userName, password) => dispatch({ type: 'CHATT_LOGIN', userName, password })
});

export default connect(
  null,
  mapDispatchToProps
)(LoginPageComponent);

// export default LoginPageComponent;
