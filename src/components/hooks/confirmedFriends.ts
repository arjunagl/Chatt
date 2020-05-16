import { useSelector, shallowEqual } from 'react-redux';

export function useConfirmedFriends() {
  // @ts-ignore
  const confirmedFriends = useSelector(state => state.chatt.friends.confirmedFriends, shallowEqual);
  return confirmedFriends;
}
