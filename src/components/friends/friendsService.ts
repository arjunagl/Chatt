import mockFriends from './friendsMock.json';
import Person from './person';

const filterFriends = async (searchTerm: string = '') => {
  const filteredFriends =
    searchTerm === ''
      ? mockFriends
      : mockFriends.filter(
          friend =>
            friend.name
              .toLowerCase()
              .trim()
              .indexOf(searchTerm.toLowerCase().trim()) >= 0 ||
            friend.nickName
              .toLowerCase()
              .trim()
              .indexOf(searchTerm.toLowerCase().trim()) >= 0
        );
  return filteredFriends;
};

const loadFriendsFor = async (user: string, startElement: number, searchTerm: string) => {
  const filteredFriends = await filterFriends(searchTerm);
  return filteredFriends.slice(startElement, startElement + 20);
};

// class FriendService {
//   static async filterFriends(searchTerm: string) {
//     return mockFriends.filter(
//       friend =>
//         friend.name
//           .toLowerCase()
//           .trim()
//           .indexOf(searchTerm.toLowerCase().trim()) >= 0 ||
//         friend.nickName
//           .toLowerCase()
//           .trim()
//           .indexOf(searchTerm.toLowerCase().trim()) >= 0
//     );
//   }

//   static async loadFriendsFor(user: string, startElement: number, searchTerm: string) {
//     const filteredFriends = await this.filterFriends(searchTerm);
//     return filteredFriends.slice(startElement, startElement + 20);
//   }
// }

export default {
  filterFriends,
  loadFriendsFor
};
