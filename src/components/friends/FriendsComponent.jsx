import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import FriendComponent from './FriendComponent';
import * as FriendsComponentStyles from './FriendsComponentStyles';

const FriendsComponent = () => {
  const confirmedFriends = useSelector(state => state.chatt.friends.confirmedFriends);
  const dispatch = useDispatch();
  const ref = useRef(null);

  const loadFriends = () => dispatch({ type: 'LOAD_FRIENDS' });

  function handleScroll() {
    if (ref.current.scrollTop + ref.current.clientHeight >= ref.current.scrollHeight) {
      loadFriends();
      return;
    }
  }

  useEffect(() => {
    loadFriends();
  }, [confirmedFriends.length]);

  confirmedFriends.sort((firstFriend, secondFriend) => firstFriend.order >= secondFriend.order);
  const friendsToRender = confirmedFriends.map(friend => (
    <FriendComponent
      key={friend.order}
      friend={friend}
      style={FriendsComponentStyles.FriendBlockStyle}
    />
  ));
  return (
    <FriendsComponentStyles.FriendsContainerBlock onScroll={handleScroll} ref={ref}>
      {friendsToRender}
    </FriendsComponentStyles.FriendsContainerBlock>
  );
};

export default FriendsComponent;
