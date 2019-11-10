import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import FriendComponent from './FriendComponent';
import * as FriendsComponentStyles from './FriendsComponentStyles';

const FriendsComponent = React.memo(({ confirmedFriends, loadFriends, ...props }) => {
  const ref = useRef(null);
  function handleScroll() {
    // this.refs.myscroll.scrollTop + this.refs.myscroll.clientHeight >=
    // this.refs.myscroll.scrollHeight
    console.log('scrollTop = ', ref.current.scrollTop);
    console.log('clientHeight =', ref.current.clientHeight);
    console.log('scrollHeight = ', ref.current.scrollHeight);
    if (ref.current.scrollTop + ref.current.clientHeight >= ref.current.scrollHeight) {
      console.log('Fetch more list items!');
      return;
    }
  }

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
    <FriendsComponentStyles.FriendsContainerBlock onScroll={handleScroll} ref={ref}>
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
