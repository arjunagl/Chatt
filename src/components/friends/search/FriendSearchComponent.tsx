import { connect } from 'react-redux';
import React, { ChangeEventHandler, useState, useEffect } from 'react';
import * as FriendSearchComponentStyles from './FriendSearchComponentStyles';
import { debounceTime } from 'rxjs/operators';
import { Subject } from 'rxjs';

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
    subject.next(formDataToSet);
  };

  const subject = new Subject();
  const formInput$ = subject.pipe(debounceTime(5000));
  // Using effects to setup the subscription and unsubscribe from the subscription
  useEffect(() => {
    formInput$.subscribe(inputData => {
      console.log(`dispatching the friends search = ${JSON.stringify(inputData, null, 2)}`);
    });

    return function cleanup() {
      // @ts-ignore
      formInput$.unsubscribe();
    };
  });

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
