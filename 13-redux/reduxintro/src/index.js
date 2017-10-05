import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { createStore } from 'redux'










/// Store
/// Actions
//// Reducer 



/// a reducer can get state from its store and depending on the action we send in 
// it will return state
function rootReducer(state = { bankAccount: 100, name: "Johann", address: "NYC", job:"Instructor" }, action) {
  /// DEPENDING ON THE ACTION SENT IN I CAN RETURN STATE
  
  switch (action.type) {
    case "WITHDRAW_MONEY":
        // based on the value of state.bankAccount I can remove the amount and return the new bankAccount value
        return Object.assign({}, state, { bankAccount: state.bankAccount - action.amount })
    
    case "DEPOSIT_MONEY":
        return {...state, bankAccount: state.bankAccount + action.amount}
    case "GET_BALANCE":
        return state
    default:
      return state
  }
}

/// ACTION CREATORS
function withdraw(amount) {
  return {
    type: "WITHDRAW_MONEY",
    amount: amount
  }
}

function deposit(amount) {
  return {
    type: "DEPOSIT_MONEY",
    amount: amount
  }
}


function getBalance() {
  return {
    type: "GET_BALANCE"
  }
}
withdraw(10000)

const store = createStore(rootReducer)


console.log(store.getState())

store.dispatch(withdraw(10))
store.dispatch(withdraw(20))

console.log(store.getState())
store.dispatch(deposit(100))
console.log(store.getState())
store.dispatch(deposit(100))
store.dispatch(getBalance())








ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
