export function fetchBooks(genre) {
  return fetch(`https://www.googleapis.com/books/v1/volumes?q=subject:${genre}&maxResults=40`)
    .then((res) => res.json())
}


export function searchBooks(book) {
  return fetch(`https://www.googleapis.com/books/v1/volumes?q=${book}&maxResults=5`)
    .then((res) => res.json())
}
