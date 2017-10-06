function rootReducer(state = {books: [
  {id: 1, title: "Count of Monte Cristo", thumbnail: ""},
  {id: 2, title: "The Three Musketeers", thumbnail: ""},
  {id: 4, title: "Full Stack React", thumbnail: ""}
], cart: []}, action) {
  // DEPENDING ON THE ACTION RETURN SOME NEW STATE
  switch(action.type) {
    case "ADD_BOOK":
      // { type: ADD_BOOK, payload: "Count of Monte Cristo"}
      return Object.assign({}, state, {books: [...state.books, {id: (state.books.length + 1), title: action.payload}]} )
    case "REMOVE_BOOK":
      return Object.assign({}, state, {books: state.books.filter((book) => book.id !== action.payload) })
    default: 
      return state
  }
}


export default rootReducer


/*

Rules
1. Must take in state and action
2. Depending on action return some new state
3. Never change state always return new state
4. It is usually a good idea to give your reducer a default state


*/