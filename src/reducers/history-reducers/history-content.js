export default function (state=null, action) {
  switch (action.type) {
    case "SHOW_HISTORY_CONTENT":
      return action.payload;
    case "HIDE_HISTORY_CONTENT":
      return state = null;
    default:
      return state;
  }
}