import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { personalButtonsContent, hideHistoryContent, hideMainPersonalButton} from "../../actions/index";

class PersonalButtonsNames extends Component{
  apperaAndDisappear(index){
    this.props.personalButtonsContent(this.props.personal[index]);
    this.props.hideHistoryContent();
    this.props.hideMainPersonalButton()
  }
  disappearPersonalButtons(){
    this.props.hideMainPersonalButton();
  }
  render () {
    if (!this.props.personal){
      return ("")
    }
    return (
      <div className="app-main-page__content__personal">
        <button onClick={() => this.apperaAndDisappear(0)}>{this.props.personal[0].firstName}</button>
        <button onClick={() => this.apperaAndDisappear(1)}>{this.props.personal[1].firstName}</button>
        <button onClick={() => this.apperaAndDisappear(2)}>{this.props.personal[2].firstName}</button>
        <button onClick={() => this.apperaAndDisappear(3)}>{this.props.personal[3].firstName}</button>
        <button onClick={() => this.apperaAndDisappear(4)}>{this.props.personal[4].firstName}</button>
        <button onClick={() => this.apperaAndDisappear(5)}>{this.props.personal[5].firstName}</button>
        <button className="app-main-page__content__personal__close" onClick={() =>this.disappearPersonalButtons()}>X</button>
      </div>
    )
  };
};

function mapStateToProps (state) {
  return {
    personal : state.buttonMainActive
  };
};

function matchDispatchToProps (dispatch) {
  return bindActionCreators({ personalButtonsContent, hideHistoryContent, hideMainPersonalButton}, dispatch);
};

export default connect (mapStateToProps, matchDispatchToProps)(PersonalButtonsNames);