export default function login(state = [], action) {
  switch (action.type) {
    case 'CHATT_LOGIN_DONE':
      return { userName: action.userName };
    default:
      return state;
  }
}
