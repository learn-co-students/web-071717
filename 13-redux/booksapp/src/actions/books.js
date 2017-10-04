export function addToCart(book) {
  return {
    type: "ADD_TO_CART",
    payload: book
  }
}

export function removeFromCart(book) {
  return {
    type: "REMOVE_FROM_CART",
    payload: book
  }
}

// ACTION CREATORS
