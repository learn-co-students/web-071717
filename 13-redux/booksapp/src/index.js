import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router } from 'react-router-dom'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import usersReducer from './reducers/usersReducer'
import booksReducer from './reducers/booksReducer'
import { Provider } from 'react-redux'
import { addBook, fetchBooks } from './actions/books'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({users: usersReducer, books: booksReducer})
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
//const store = createStore(rootReducer)

ReactDOM.render(<Provider store={store}><Router><App /></Router></Provider>, document.getElementById('root'));
registerServiceWorker();
