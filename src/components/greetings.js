import React, { Component } from "react";

import GreetingsContent from "../containers/greetings-folder/greetings-content";

class Greetings extends Component{
  render(){
    return(
      <div className="app-content__greetings-page">
        <GreetingsContent />
      </div>
    )
  }
}

export default Greetings;