import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { hidePersonalButtonsContent } from "../../actions/index";

class PersonalButtonsContent extends Component{
  hideContent(){
    return <button onClick={() => this.props.hidePersonalButtonsContent()}>X</button>
  }
 render () {
  if (!this.props.personal){
    return ("");
  };
  return (
    <div className="app-main-page__content__personal-content">
      <div className="app-main-page__content__personal-content__title">
        <h2>{this.props.personal.firstName}</h2>
        <h2>{this.props.personal.lastName}</h2>
        {this.hideContent()}
      </div>
      <div className="app-main-page__content__personal-content__info">
        <img src={this.props.personal.image} alt=""></img>
        <p>{this.props.personal.dateOfBirth}</p>
        <p>{this.props.personal.placeOfBirth}</p>
        <p>{this.props.personal.generalInformation}</p>
        <img src={this.props.personal.imageA} alt=""></img>
        <p>{this.props.personal.additinalInfo}</p>
        <div className="app-content__main-page__content__personal-content__anchor">
          <a href="#topPersonal">Up</a>
        </div>
      </div>
    </div>
  )
  };
};

function mapStateToProps (state) {
  return {
    personal : state.personalButtons
  };
};

function matchDispatchToProps (dispatch) {
  return bindActionCreators({ hidePersonalButtonsContent }, dispatch);
};

export default connect (mapStateToProps, matchDispatchToProps)(PersonalButtonsContent);