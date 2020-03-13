import React, { Component } from "react";
import PersonalMainButton from "../containers/personal-buttons/personal-main-button";
import PersonalButtonsNames from "../containers/personal-buttons/personal-buttons-names";
import PersonalButtonsContent from "../containers/personal-buttons/personal-buttons-content";

import HistoryMainButton from "../containers/history-buttons/history-main-button";
import HistoryContent from "../containers/history-buttons/history-content";



class MainPage extends Component {
  render(){
    return(
      <div className="app-content__main-page">
        <div className="app-content__main-page__buttons">
          <PersonalMainButton />
          <HistoryMainButton />

        </div>
        <div className="app_content__main-page__names-buttons">

          <PersonalButtonsNames />
        </div>
        <div className="app-content__main-page__content">
          <PersonalButtonsContent />
          <HistoryContent />
        </div>
      </div>
    )
  };
};

export default MainPage;
