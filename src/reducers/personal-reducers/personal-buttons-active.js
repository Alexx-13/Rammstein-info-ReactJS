export default function (state=null, action) {
  switch (action.type) {
    case "SELECT_NAME_BUTTON":
      return action.payload;
    case "HIDE_PERSONAL_BUTTONS_CONTENT":
      return state=null;
    default:
      return state;
  }
}