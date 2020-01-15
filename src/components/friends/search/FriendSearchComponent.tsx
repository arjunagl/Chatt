import { connect } from 'react-redux';
import React, { useState, useEffect } from 'react';
import * as FriendSearchComponentStyles from './FriendSearchComponentStyles';
import { debounceTime } from 'rxjs/operators';
import { Subject } from 'rxjs';

const friendComponent = () => {
  const [queryName, setQueryName] = useState({
    searchTerm: { value: '', valid: true }
  });
  const [onSearch$] = useState(() => new Subject());

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    const formDataToSet = {
      ...queryName,
      ...{ searchTerm: { valid: true, value: newValue } }
    };
    setQueryName(formDataToSet);
    onSearch$.next(formDataToSet);
  };

  useEffect(() => {
    const subscription = onSearch$.pipe(debounceTime(400)).subscribe(val => {
      console.log(`this is value = ${val}`);
    });
  }, []);

  return (
    <FriendSearchComponentStyles.containerBlock>
      <input
        type="text"
        style={FriendSearchComponentStyles.searchComponentStyle}
        onChange={onChange}
      ></input>
    </FriendSearchComponentStyles.containerBlock>
  );
};

export default friendComponent;
