// I have an array of fruit, and I want to console.log each fruit in the array
let fruits = ["mango", "mangosteen", "dragonfruit", "kumquat", "lychee", "jackfruit"]

// // Iterating over `each` element, and doing some operation
// for (let i = 0; i < fruits.length; i++) {
//   // Do some operation
//   let fruit = fruits[i]
//   fruit = "fruit name: " + fruit
//   console.log(fruit)
// }

function each(array, callback) {
  // Iterating over `each` element, and doing some operation
  // * JavaScript `forEach` returns undefined

  // Callback is a function that does something
  for (let i = 0; i < array.length; i++) {
    // Do some operation
    let el = array[i]
    callback(el)
  }
}

// Ruby
// Call a callback with every element in the original array and returns
// a new array with the same number of elements as the original array
// function map(arr, callback) {
//   // Why use `const`? Can modify this array, but I can't reassign the variable
//   const newArray = []
//
//   for (let i = 0; i < arr.length; i++) {
//     let element = arr[i]
//     let modifiedElement = callback(element)
//     newArray.push(modifiedElement)
//   }
//   // what does it do?
//   // what does it return, if anything?
//   return newArray
// }
//
// function plusOne(element) { return element + 1 }


function filter(arr, callback) {
  // Return a subset of the original array based on some condition
  // Do a for loop, check to see if the condition is true, and push into a new array if true
  const newArr = []

  for (let i = 0; i < arr.length; i++) {
    // check if arr[i] meets callback condition
    const el = arr[i]
    if (callback(el)) {
      newArr.push(el)
    }
  }

  return newArr
}

// Ruby { |element| element % 2 == 0 }
function isEven(element) {
  // return a boolean value
  return element % 2 === 0
}

// filter([1,2,3,4], isEven) // [2,4]

function reduce(arr, callback) {

}
