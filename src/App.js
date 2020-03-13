import React, { Component } from 'react';
import MainPage from "./components/main-page";
import Greetings from "./components/greetings";
import GreetingsButton from "./containers/greetings-folder/greetings-button";
import './App.css';
import RammsteinVideo from "./video/Rammstein - Ich Tu Dir Weh.mp4"

class App extends Component{
  render(){
    return(
      <div className="App">
        <div className="app-title">
          <div className="app-title__video">
            <video autoPlay loop muted>
                  <source src={RammsteinVideo} type="video/mp4"></source>
            </video>
            <video autoPlay loop muted>
                  <source src={RammsteinVideo} type="video/mp4"></source>
            </video>
          </div>

          <div className="app-title__info">
          
            <GreetingsButton />
            <h1> inf<span>o</span>-p<span>o</span>rtal </h1>
            <Greetings />
          </div>
        </div>
        <div className="app-content">
          <MainPage />
        </div>
      </div>
    )
  };
};

export default App;