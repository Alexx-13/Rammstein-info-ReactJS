import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { hideAppearGreetingsWidnow } from "../../actions/index"

class GreetingsContent extends Component{
  closeWindowButton(){
    return <button onClick={() => this.props.hideAppearGreetingsWidnow()}>Got it!</button>
  }
 render () {
  if (!this.props.greetings){
    return ("")
  }
  return (
    <div className="app-greetings-page__content">
      <h2>{this.props.greetings[0].title}</h2>
      <p>{this.props.greetings[0].text}</p>
      <p>{this.props.greetings[0].extraInfo}</p>
      {this.closeWindowButton()}
    </div>
  )
  }
}

function mapStateToProps (state) {
  return {
    greetings : state.greetingsContent
  };
}

function matchDispatchToProps (dispatch) {
  return bindActionCreators({ hideAppearGreetingsWidnow}, dispatch);
}

export default connect (mapStateToProps, matchDispatchToProps)(GreetingsContent);