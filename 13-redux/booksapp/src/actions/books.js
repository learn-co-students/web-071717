export function addBook(title) {
  // A plain Object
  return {
    type: "ADD_BOOK",
    payload: title
  }
}


export function removeBook(id) {
  return {
    type: "REMOVE_BOOK",
    payload: id
  }
}


function fetchingBooks() {
  return {
    type: "FETCHING_BOOKS"
  }
}

function fetchedBooks(books) {
  return {
    type: "FETCHED_BOOKS",
    payload: books
  }
}

export function fetchBooks() {
  return function(dispatch) {
    dispatch(fetchingBooks())
    fetch('https://www.googleapis.com/books/v1/volumes?q=subject:suspense&maxResults=40')
      .then((res) => res.json())
      .then((json) => {
        const books = json.items
        dispatch(fetchedBooks(books))
      })
  }
}

export function searchBooks(title) {
  return function (dispatch) {
    dispatch(fetchingBooks())
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${title}&maxResults=40`)
      .then((res) => res.json())
      .then((json) => {
        dispatch(fetchedBooks(json.items))
        // json.items
      })
  }

}
