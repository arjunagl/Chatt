import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';

export function useConfirmedFriends() {
  // @ts-ignore
  const confirmedFriends = useSelector(state => state.chatt.friends.confirmedFriends, shallowEqual);
  return confirmedFriends;
}
