import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { selectedMainPersonalButton } from "../../actions/index";

class PersonalMainButton extends Component{
  mainPersonalButton(){
    return <button onClick={() => this.appearAndDisappear()}>MEMBERS</button>
  };
  appearAndDisappear(){
    this.props.selectedMainPersonalButton(this.props.personal);
  };
  render(){
    return(
      <div className="app-main-page__personal-button">
        {this.mainPersonalButton()}
        <a name="topPersonal"></a>
      </div>
    )
  };
};

function mapStateToProps (state) {
  return {
    personal : state.personal
  };
};

function matchDispatchToProps (dispatch) {
  return bindActionCreators({ selectedMainPersonalButton }, dispatch);
};

export default connect(mapStateToProps, matchDispatchToProps)(PersonalMainButton);
