import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import FriendComponent from './FriendComponent';
import * as FriendsComponentStyles from './FriendsComponentStyles';

const FriendsComponent = ({ confirmedFriends, loadFriends }) => {
  const ref = useRef(null);
  function handleScroll() {
    if (ref.current.scrollTop + ref.current.clientHeight >= ref.current.scrollHeight) {
      loadFriends(false);
      return;
    }
  }

  useEffect(() => {
    if (confirmedFriends.length == 0) {
      loadFriends(true);
    }
  }, [confirmedFriends]);

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

const mapStateToProps = state => {
  return {
    confirmedFriends: state.chatt.friends.confirmedFriends,
    friendFilter: state.chatt.friends.filter
  };
};

const mapDispatchToProps = dispatch => ({
  loadFriends: start => dispatch({ type: 'LOAD_FRIENDS', start })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FriendsComponent);
