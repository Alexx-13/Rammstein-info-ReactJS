export const selectedMainPersonalButton = (mainPersonalButton) => {
  return {
    type : "SELECT_MAIN_PERSONAL_BUTTONS",
    payload : mainPersonalButton
  };
};

export const hideMainPersonalButton = (hideMainPersonal) => {
  return {
    type : "HIDE_MAIN_PERSONAL_BUTTONS",
    payload : hideMainPersonal
  };
};

export const personalButtonsContent = (personalButton) => {
  return {
    type : "SELECT_NAME_BUTTON",
    payload : personalButton
  };
};

export const hidePersonalButtonsContent = (PersonalButtons) => {
  return {
    type : "HIDE_PERSONAL_BUTTONS_CONTENT",
    payload : PersonalButtons
  };
};

export const historyContent = (history) => {
  return {
    type : "SHOW_HISTORY_CONTENT",
    payload : history
  };
};

export const hideHistoryContent = (hideHistory) => {
  return {
    type : "HIDE_HISTORY_CONTENT",
    payload : hideHistory
  };
};

export const asyncAppearGreetingsWindow = (asyncAppear) =>{
  return {
    type : "APPEAR_GREETINGS_WINDOW",
    payload : asyncAppear
  };
};

export const hideAppearGreetingsWidnow = (hideAppear) => {
  return {
    type : "HIDE_GREETINGS_WINDOW",
    payload : hideAppear
  };
};

