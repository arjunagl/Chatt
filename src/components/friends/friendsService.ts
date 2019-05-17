import { ApolloClient } from 'apollo-client';
import graphqlTag from 'graphql-tag';
import Person from './person';

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
  static async loadFriendsFor(user: string, apolloClient: ApolloClient<Person>) {
    try {
      const queryResults = await apolloClient.query({
        query: graphqlTag`
          query getChatters($name: String!) {
            person(name: $name) {
              _id
              name
              friends {
                name
                friends {
                  name
                }
              }
            }
          }
        `,
        variables: {
          name: 'adam',
          skip: 10,
          first: 10
        }
      });

      const {
        data: { person }
      } = queryResults;
      // map the results to the new friends
      console.log(person);
      return mockFriends;
    } catch (e) {
      console.log(e);
    }
  }
}

export default FriendService;
