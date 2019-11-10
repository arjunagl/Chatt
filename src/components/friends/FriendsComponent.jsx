import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import FriendComponent from './FriendComponent';
import * as FriendsComponentStyles from './FriendsComponentStyles';

const FriendsComponent = React.memo(({ confirmedFriends, loadFriends, ...props }) => {
  const ref = useRef(null);
  function handleScroll() {
    // console.log(
    //   `window.innerHeight = ${window.innerHeight}, document.documentElement.scrollTop = ${document.documentElement.scrollTop}, document.documentElement.offsetHeight = ${document.documentElement.offsetHeight}`
    // );
    console.log(ref.current.clientHeight);
    if (
      ref.current.clientHeight + document.documentElement.scrollTop !==
      document.documentElement.offsetHeight
    ) {
      return;
    }
    console.log('Fetch more list items!');
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
