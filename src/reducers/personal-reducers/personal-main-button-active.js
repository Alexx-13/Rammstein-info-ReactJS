export default function (state=null, action) {
  switch (action.type) {
    case "SELECT_MAIN_PERSONAL_BUTTONS":
      return action.payload;
    case "HIDE_MAIN_PERSONAL_BUTTONS":
      return state=null;
    default:
      return state;
  }
}