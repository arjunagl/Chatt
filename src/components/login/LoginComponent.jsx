import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import styled from 'styled-components';
import * as AppStyles from '../../common/styles/appStyles';

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

const subject = new Subject();
const formInput$ = subject.pipe(debounceTime(1000));

const LoginPageComponent = ({ login }) => {
  const [formData, setFormData] = useState({
    userNameOrEmail: { value: '', valid: true },
    password: { value: '', valid: true }
  });

  const validateFormData = inputData => {
    const formattedInputData = { ...inputData };

    // Email validation
    if (
      inputData.userNameOrEmail.value.includes('@') &&
      // eslint-disable-next-line no-useless-escape
      !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        String(inputData.userNameOrEmail.value).toLowerCase()
      )
    ) {
      formattedInputData.userNameOrEmail.valid = false;
    } else if (
      inputData.userNameOrEmail.value.length > 0 &&
      inputData.userNameOrEmail.value.length < 5
    ) {
      formattedInputData.userNameOrEmail.valid = false;
    }

    // Password validation, has to be 5 characters just for the sake of it
    if (inputData.password.value.length > 0 && inputData.password.value.length < 5) {
      formattedInputData.password.valid = false;
    }

    return setFormData(formattedInputData);
  };

  const validateSubmitFormData = inputData => {
    // From a general sense ensure the form has valid data
    validateFormData(inputData);

    // Ensure that something has been typed in as well

    const formattedInputData = { ...inputData };

    if (inputData.userNameOrEmail.value.length < 1) {
      formattedInputData.userNameOrEmail.valid = false;
    }

    if (inputData.password.value.length < 1) {
      formattedInputData.password.valid = false;
    }

    return setFormData(formattedInputData);
  };

  // Using effects to setup the subscription and unsubscribe from the subscription
  useEffect(() => {
    formInput$.subscribe(inputData => {
      validateFormData(inputData);
    });

    return function cleanup() {
      formInput$.unsubscribe();
    };
  });

  const updateFormData = event => {
    const formDataToSet = {
      ...formData,
      ...{ [event.target.name]: { valid: true, value: event.target.value } }
    };
    setFormData(formDataToSet);
    subject.next(formDataToSet);
  };

  const { userNameOrEmail, password } = formData;

  const submitLogin = () => {
    validateSubmitFormData(formData);
    if (formData.userNameOrEmail.valid && formData.password.valid) {
      // Emit the login only if the formdata is valid
      login(userNameOrEmail, password);
    }
  };

  return (
    <div style={blockContainer}>
      <LoginBlockContainer>
        <TextField
          error={!userNameOrEmail.valid}
          id="userNameOrEmail"
          name="userNameOrEmail"
          label="username or email"
          margin="normal"
          value={userNameOrEmail.value}
          onChange={e => updateFormData(e)}
        />
        <TextField
          error={!password.valid}
          id="password"
          name="password"
          label="password"
          type="password"
          margin="normal"
          value={password.value}
          onChange={e => updateFormData(e)}
        />
        <Button variant="contained" color="primary" style={loginButtonStyle} onClick={submitLogin}>
          <span>Log In </span>
        </Button>
      </LoginBlockContainer>
    </div>
  );
};

LoginPageComponent.propTypes = {
  login: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  login: (userName, password) => dispatch({ type: 'CHATT_LOGIN', userName, password })
});

export default connect(
  null,
  mapDispatchToProps
)(LoginPageComponent);
