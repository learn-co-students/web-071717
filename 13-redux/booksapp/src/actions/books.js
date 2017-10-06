export function addBook(title) {
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