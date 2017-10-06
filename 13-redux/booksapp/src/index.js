import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router } from 'react-router-dom'
import { createStore } from 'redux'
import rootReducer from './reducers/rootReducer'
import { Provider } from 'react-redux'




const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

// STEP -1: FIGURE OUT WHAT YOUR APP DOES 
//// STEP 0: Write a reducer
/// STEP 1: Need to make a store
/// STEP 2: Lets make some actions

ReactDOM.render(<Provider store={store}><Router><App /></Router></Provider>, document.getElementById('root'));
registerServiceWorker();
