import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { hideHistoryContent } from "../../actions/index";

class HistoryContent extends Component{
  hideContent(){
    return <button onClick={() => this.props.hideHistoryContent()}>X</button>
  };
 render () {
  if (!this.props.history){
    return ("");
  };
  return (
    <div className="app-content__main-page__content__history">
      <h2>{this.props.history[0].titleA}</h2>
      {this.hideContent()}
      <p>{this.props.history[0].textA}</p>
      <h2>{this.props.history[0].titleB}</h2>
      <p>{this.props.history[0].textB}</p>
      <h2>{this.props.history[0].titleC}</h2>
      <p>{this.props.history[0].textC}</p>
      <h2>{this.props.history[0].titleD}</h2>
      <p>{this.props.history[0].textD}</p>
      <h2>{this.props.history[0].titleE}</h2>
      <p>{this.props.history[0].textE}</p>
      <h2>{this.props.history[0].titleF}</h2>
      <p>{this.props.history[0].textF}</p>
      <h2>{this.props.history[0].titleG}</h2>
      <p>{this.props.history[0].textG}</p>
      <h2>{this.props.history[0].titleH}</h2>
      <p>{this.props.history[0].textH}</p>
      <div className="app-content__main-page__content__history__anchor">
        <a href="#topHistory">Up</a>
      </div>
    </div>
  )
  };
};

function mapStateToProps (state) {
  return {
    history : state.historyContent
  };
};

function matchDispatchToProps (dispatch) {
  return bindActionCreators({ hideHistoryContent }, dispatch);
};

export default connect (mapStateToProps, matchDispatchToProps)(HistoryContent);