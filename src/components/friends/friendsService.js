const mockFriends = [
  {
    order: 1,
    nickName: 'padam'
  },
  {
    order: 2,
    nickName: 'ding'
  },
  {
    order: 3,
    nickName: 'dong'
  }
];

class FriendService {
  static loadFriendsFor(user) {
    return mockFriends;
  }
}

export default FriendService;
