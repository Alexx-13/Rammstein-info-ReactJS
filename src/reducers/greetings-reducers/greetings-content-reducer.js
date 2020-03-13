export default function (state=null, action) {
  switch (action.type) {
    case "APPEAR_GREETINGS_WINDOW":
      return action.payload;
    case "HIDE_GREETINGS_WINDOW":
      return state=null;
    default:
      return state;
  }
}