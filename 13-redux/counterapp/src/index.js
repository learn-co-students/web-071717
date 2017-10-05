import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux'
import rootReducer from './reducers/rootReducer'
import { Provider } from 'react-redux'


// store
// reducers
/// actions
// STEP 0: WHAT AM I GOING TO BUILD? A Counter app
// STEP 1: Write your reducers
/// Step 2: Create a store
/// Step 3: Create some actions (or as they are sometimes called action creators)
// Step 4: Make Provider the highest parent and pass it the store as props

/// WHY an action is a plain object (key value pair) { type: "BEEF" }

const store = createStore(rootReducer)
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
