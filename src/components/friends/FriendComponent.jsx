import Avatar from '@material-ui/core/Avatar';
import { connect } from 'react-redux';
import React from 'react';

const FriendComponent = React.memo(({ friend, selectFriend, ...props }) => {
  const highlightFriend = selectedFriend => {
    selectFriend(selectedFriend);
  };

  return (
    <Avatar {...props} onClick={() => highlightFriend(friend)}>
      {friend.nickName}
    </Avatar>
  );
});

const mapDispatchToProps = dispatch => ({
  selectFriend: friend => dispatch({ type: 'SELECT_FRIEND', friend })
});

export default connect(
  null,
  mapDispatchToProps
)(FriendComponent);
