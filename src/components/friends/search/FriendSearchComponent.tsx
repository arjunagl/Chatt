import { useDispatch } from 'react-redux';
import React, { useState, useEffect } from 'react';
import * as FriendSearchComponentStyles from './FriendSearchComponentStyles';
import { debounceTime } from 'rxjs/operators';
import { Subject } from 'rxjs';

const friendComponent = () => {
  const dispatch = useDispatch();
  const [queryName, setQueryName] = useState({
    searchTerm: { value: '', valid: true }
  });
  const [onSearch$] = useState(() => new Subject<string>());

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    const formDataToSet = {
      ...queryName,
      ...{ searchTerm: { valid: true, value: newValue } }
    };
    setQueryName(formDataToSet);
    onSearch$.next(newValue);
  };

  useEffect(() => {
    const subscription = onSearch$.pipe<string>(debounceTime(400)).subscribe(friend => {
      dispatch({ type: 'CLEAR_FRIENDS' });
      dispatch({ type: 'FRIENDS_FILTER', filterText: friend });
    });
  }, []);

  return (
    <FriendSearchComponentStyles.containerBlock>
      <input
        type="search"
        style={FriendSearchComponentStyles.searchComponentStyle}
        onChange={onChange}
      ></input>
    </FriendSearchComponentStyles.containerBlock>
  );
};

export default friendComponent;
