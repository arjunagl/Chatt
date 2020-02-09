import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import FriendComponent from './FriendComponent';
import * as FriendsComponentStyles from './FriendsComponentStyles';
import { useConfirmedFriends } from '../hooks/confirmedFriends';

const FriendsComponent = () => {
  const confirmedFriends = useConfirmedFriends();
  const friendsFilter = useSelector(state => state.chatt.friends.filter, shallowEqual);
  const dispatch = useDispatch();
  const ref = useRef(null);

  const loadFriends = () => dispatch({ type: 'LOAD_FRIENDS' });

  function handleScroll() {
    if (ref.current.scrollTop + ref.current.clientHeight >= ref.current.scrollHeight) {
      console.log('executing friends load from scroll');
      loadFriends();
      return;
    }
  }

  useEffect(() => {
    // only call load friends if there is none already loaded
    confirmedFriends.length === 0 ? loadFriends() : null;
  }, [friendsFilter]);

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
