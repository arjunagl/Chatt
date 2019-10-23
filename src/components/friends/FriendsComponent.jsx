import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import FriendComponent from './FriendComponent';
import * as FriendsComponentStyles from './FriendsComponentStyles';

const FriendsComponent = React.memo(({ confirmedFriends, loadFriends, ...props }) => {
  useEffect(() => {
    loadFriends();
  }, []);

  confirmedFriends.sort((firstFriend, secondFriend) => firstFriend.order >= secondFriend.order);
  const friendsToRender = confirmedFriends.map(friend => (
    <FriendComponent
      key={friend.order}
      friend={friend}
      style={FriendsComponentStyles.FriendBlockStyle}
    />
  ));
  return (
    <FriendsComponentStyles.FriendsContainerBlock>
      {friendsToRender}
    </FriendsComponentStyles.FriendsContainerBlock>
  );
});

const mapStateToProps = state => {
  return {
    confirmedFriends: state.chatt.friends.confirmedFriends
  };
};

const mapDispatchToProps = dispatch => ({
  loadFriends: () => dispatch({ type: 'LOAD_FRIENDS' })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FriendsComponent);
