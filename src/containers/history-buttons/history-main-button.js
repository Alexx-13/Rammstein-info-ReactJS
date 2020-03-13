import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { historyContent, hideMainPersonalButton, hidePersonalButtonsContent} from "../../actions/index";

class HistoryMainButton extends Component{
  mainHistoryButton(){
    return <button onClick={() => this.appearAndDisapper()}>HISTORY</button>
  };
  appearAndDisapper(){
    this.props.historyContent(this.props.history);
    this.props.hideMainPersonalButton();
    this.props.hidePersonalButtonsContent();
  };
  render(){
    return(
      <div className="app-main-page__history-button">
        {this.mainHistoryButton()}
        <a name="topHistory"></a>
      </div>
    )
  };
};

function mapStateToProps (state) {
  return {
    history : state.history
  };
};

function matchDispatchToProps (dispatch) {
  return bindActionCreators({ historyContent ,  hideMainPersonalButton, hidePersonalButtonsContent}, dispatch);
};

export default connect(mapStateToProps, matchDispatchToProps)(HistoryMainButton);
