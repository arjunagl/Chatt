import { ApolloClient } from 'apollo-client';
import mockFriends from './friendsMock.json';
import Person from './person';

class FriendService {
  static async loadFriendsFor(
    user: string,
    startElement: number,
    apolloClient: ApolloClient<Person>
  ) {
    return mockFriends.slice(startElement, startElement + 20);
  }
}

export default FriendService;
