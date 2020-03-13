import { combineReducers } from "redux";

import personalInfo from "./data-folder/personal-info";
import personalMainButtonActive from "./personal-reducers/personal-main-button-active";
import personalButtonsActive from "./personal-reducers/personal-buttons-active";

import historyInfo from "./data-folder/history-info";
import historyContent from "./history-reducers/history-content";

import greetingsInfo from "./data-folder/greetings-info";
import asyncGreetingsContent from "./greetings-reducers/greetings-content-reducer";

const allReducers = combineReducers({
  personal : personalInfo,
  buttonMainActive : personalMainButtonActive,
  personalButtons : personalButtonsActive,
  history : historyInfo,
  historyContent : historyContent,
  greetings : greetingsInfo,
  greetingsContent : asyncGreetingsContent,
});

export default allReducers;