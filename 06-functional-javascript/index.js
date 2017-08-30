// FUNCTIONAL JS METHODS -------------------------------------------------------
//
// In Ruby, we have blocks/procs/lamdas which are short pieces of reusable
// code that's not defined formally in a function.
//
// We pass these blocks/procs/lamdas to functions as an argument and the
// function will eventually call the block/proc/lamda during the function's
// execution.
//
// ```ruby
// fruits = ["mangosteen", "dragonfruit", "kumquat"]
//
// fruits.each { |fruit| puts fruit }
// fruits.map { |fruit| "I love #{fruit}" }
// fruits.select { |fruit| fruit.include?("o") }
// fruits.reduce("I love") { |acc, fruit| "#{acc} #{fruit}" }
// ```
//
// We have the same functionality in JavaScript with similar methods
//
// Ruby method  =>  JavaScript method
// ----------------------------------
// fruits.each      fruits.forEach
// fruits.map       fruits.map
// fruits.select    fruits.filter
// fruits.reduce    fruits.reduce
//
// We can easily build these functions out, and then compare our
// implementations against the native methods.
// -----------------------------------------------------------------------------

// `fruits` will be our test array
let fruits = [
  "mango",
  "mangosteen",
  "dragonfruit",
  "kumquat",
  "lychee",
  "jackfruit"
]


// EACH

  // In JavaScript, the function names, its arguments, and its return values
  // (collectively known as the "signature") are:
  //
  // arr.forEach(callback, [context]) -> undefined
  // function callback(element, index, array) {}
  //
  // This says that the `forEach` method is defined on array objects. A
  // `callback` function is a required argument, and optionally you can pass
  // a `context` (more on this later). The `callback` function can have three
  // parameters defined. When the forEach function calls the `callback`, it
  // passes the element, index, and original array as arguments to it
  // *in that order*.
  //
  // ! Our implementation will be almost the same except we will pass the
  //   array to loop over as an additional first argument

  function each(array, callback) {
    for (let index = 0; index < array.length; index++) {
      let element = array[index]
      callback(element, index, array)
    }
  }

  // Test code:
  // each(fruits, callback)
  // function callback(element, index, array) { console.log(element, index, array) }


// MAP
  // arr.map(callback, [context]) -> newArray
  // function callback(element, index, array) { return element }

  function map(array, callback) {
    const newArray = []

    for (let index = 0; index < array.length; index++) {
      let element = array[index]
      let modifiedElement = callback(element, index, array)
      newArray.push(modifiedElement)
    }

    return newArray
  }

  // Test code:
  // map(fruits, callback)
  // function callback(element, index, array) { return `I love ${element}` }


// FILTER
  // arr.filter(callback, [context])
  // function callback(element, index, array) { return boolean }
  function filter(array, callback) {
    const newArray = []

    for (let index = 0; index < array.length; index++) {
      const element = array[index]
      const elementMeetsCallbackCondition = callback(element)
      if (elementMeetsCallbackCondition) {
        newArray.push(element)
      }
    }

    return newArray
  }

  // Test code:
  // filter(fruits, callback)
  // function callback(element, index, array) { return element === 'dragonfruit' }


// FIND
  // arr.find(callback, [context])
  // function callback(element, index, array) { return boolean }
  function find(arr, callback) {
    let found
    for (let i = 0; i < arr.length; i++) {
      found = arr[i]
      if (callback(found) === true) break
    }

    return found
  }

  // Test code:
  // each(fruits, callback)
  // function callback(element, index, array) { return element === 'mango' }

// NEXT: Check out closures to get a quick explanation on shared scope between
// functions
