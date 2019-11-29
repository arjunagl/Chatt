import { connect } from 'react-redux';
import React, { ChangeEventHandler, useState } from 'react';
import * as FriendSearchComponentStyles from './FriendSearchComponentStyles';

const friendComponent = React.memo(() => {
  const [formData, setSearchTerm] = useState({
    searchTerm: { value: '', valid: true }
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    const formDataToSet = {
      ...formData,
      ...{ searchTerm: { valid: true, value: newValue } }
    };
    setSearchTerm(formDataToSet);
    // subject.next(formDataToSet);
  };

  return (
    <FriendSearchComponentStyles.containerBlock>
      <input
        type="text"
        style={FriendSearchComponentStyles.searchComponentStyle}
        onChange={onChange}
      ></input>
    </FriendSearchComponentStyles.containerBlock>
  );
});

export default friendComponent;
