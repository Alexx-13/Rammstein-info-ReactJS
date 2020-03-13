import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware } from "redux";
import allReducers from "./reducers";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";


const myStore = createStore(
  allReducers, 
 composeWithDevTools(applyMiddleware(thunk))
);

ReactDOM.render(
  <Provider store={ myStore }>
    <App />
  </Provider>,
  document.getElementById('root')
);
serviceWorker.unregister();
