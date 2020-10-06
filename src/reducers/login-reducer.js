import * as c from './../actions/ActionTypes';

export default (state = null, action) => {
  const { user } = action;
  switch(action.type) {
    case c.USER_SIGNIN:
      return user;
    case c.USER_SIGNOUT:
      return null;
    default:
      return state;
  }
}