

export default (state = null, action) => {
  const { user } = action;
  switch(action.type) {
    case 'USER_SIGNIN':
      return user;
    case 'USER_SIGNOUT':
      return null;
    default:
      return state;
  }
}