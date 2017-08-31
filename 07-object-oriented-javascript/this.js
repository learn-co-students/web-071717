// THIS ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
// The variable `this` exists in every JavaScript function. The value that the
// variable holds is the context that the function was called in.
//
// There are two types of execution context to know: global context and function
// context. There is a third called evaluation context that you can explore.
//
// HOW a function is executed determines the value of `this`. The idea is not
// like scope which describes WHERE variables are defined and accessed.
//
// The global execution context is the value of `this` outside of any function.
// In the browser, `this` is a Window object and in Node, `this` is the `global`
// object. We refer to both of these as global objects.

console.log(this)

// The function execution context is created depending on how a function
// is called. There are five different syntaxes for calling a function:
//    * Baseless function call
//    * Method call
//    * Using Function.prototype.call
//    * Using Function.prototype.apply
//    * Constructor function (next lecture)
//
// –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––


// BASELESS FUNCTION –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
// The first, baseless function call, is a function that, when executed, is not
// attached to an object. The value of `this` will either be `undefined` or the
// global object.
//
// Here is an example where we are explicitly calling the function.

function logThis() {
  console.log(this)
}

logThis() // Log: `Window {stop: ƒ, open: ƒ, alert: ƒ, confirm: ƒ, …}`

// If we use a special directive in our code to enable strict mode, the value of
// `this` becomes undefined in baseless function calls.

function logThisAsStrict() {
  'use strict';

  console.log(this)
}

logThisAsStrict()

// Here is another example of the baseless function call where the baseless
// function is passed as a callback and the higher-order function accepting the
// callback executes the function.

function logThisCallback() {
  console.log(this)
}

[1,2,3].forEach(logThisCallback) // Log: `Window {stop: ƒ, open: ƒ, …}`

// –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––


// METHOD CALL –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
// A method call should be familiar by now. JavaScript objects can have
// properties as well as methods defined on them. In methods, the value of
// `this` is set to the object that is calling the method.

let obj = {
  property: true,
  logThis: function() {
    console.log(this);
  }
}

obj.logThis() // Log: {property: true, logThis: ƒ}

// Method calls set the execution to the object calling the method only when the
// method is called on the object, and not when the the method is called
// separately from it.

let restaurant = {
  name: 'Waffle House',
  employees: [{ name: 'Brenda' }, { name: 'Mark' }],
  logThis: function() {
    console.log(this)
  },
  logRestaurantName: function() {
    console.log(this.name)
  },
  employeeCount: function () {
    return this.employees.length
  }
}

restaurant.logThis() // Log: {name: "Waffle House", employees: Array(2), logThis: ƒ, employeeCount: ƒ}
restaurant.logRestaurantName() // Log: "Waffle House"
restaurant.employeeCount() // Log: 2

// When we save a reference to the function in another variable, or pass a
// reference to the function as an argument to another function, how the method
// is called also changes, which changes the execution context.

let employeeCount = restaurant.employeeCount
// employeeCount() // Error: TypeError: Cannot read property 'length' of undefined

let restaurantLogThis = restaurant.logThis
restaurantLogThis() // Window {stop: ƒ, open: ƒ, alert: ƒ, confirm: ƒ, …}

// We see the same problem when we pass a reference to a method as a callback.
// The following code logs `Window {stop: ƒ, open: ƒ, alert: ƒ, prompt: ƒ, …}`
// twice, since the execution context has now changed.

restaurant.employees.forEach(restaurant.logThis)
// –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––


// CALL & APPLY ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
// `Function.prototype.call` and `Function.prototype.apply` are two similar
// methods defined on each function which allow you to execute functions with a
// specific execution context.
//
// Looking back at our initial `logThis`, we see that the value of `this` with
// a baseless function call will be the `global` object or `undefined`. We can
// easily change the value of `this` with `call` and `apply`.
//
function logThis() {
  console.log(this)
}

logThis.call(0) // Log: Number {[[PrimitiveValue]]: 0}
logThis.call('hello') // Log: String {0: "h", ..., [[PrimitiveValue]]: "hello"}

// Behavior changes when we pass `null` or `undefined` to `call` and `apply`.
// Essentially, by doing that, we are saying that we don't want there to be an
// execution context, and it defaults to `global` (except in strict mode).

logThis.call(null) // Log: Window {stop: ƒ, open: ƒ, alert: ƒ, confirm: ƒ, …}
logThis.call(undefined) // Log: Window {stop: ƒ, open: ƒ, alert: ƒ, …}

function logThisAsStrict() {
  'use strict';

  console.log(this)
}

logThisAsStrict.call(null) // Log: null
logThisAsStrict.call(undefined) // Log: undefined

// `call` and `apply` also accept optional arguments which are applied to the
// the function being called. The main difference between the two are:
//    * `call` takes a comma-separated list of arguments,
//    * `apply` takes an array of arguments.

function logThisAndArgs() {
  console.log(this, arguments);
}

logThisAndArgs.call([], 'hello', 'hallo') // Log: [], ["hello", "hallo"]
logThisAndArgs.apply({}, ['goodbye', 'tschüß']) // Log: {}, ["goodbye", "tschüß"]

// Here's example of some code that would use `call` and `apply`. The function
// `logRestaurantName` seems not to do much when called as a function, but
// becomes more useful when we call it with a specific context.


function logRestaurantName() {
  console.log(`Restaurant: ${this.name}`);
}

logRestaurantName() // Log: Restaurant:

const waffleHouse = { name: 'Waffle House' }
const ihop = { name: 'International House of Pancakes' }

logRestaurantName.call(waffleHouse) // Log: Restaurant: Waffle House
logRestaurantName.call(ihop) // Log: Restaurant: International House of Pancakes

// –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––


// BIND ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
// Conceptually, `call` and `apply` BIND an execution context to the function
// that we're trying to call. We can do this in two steps instead to use a
// BOUND function and call it at a later time.

// Let's say we have a new restaurant to work with, and we want to loop through
// the employees and print out `Employee: Name, Restaurant: Name`. This works
// well if we want to log one name, but works unexpectedly when we pass the
// function as a reference to `forEach`.

const dennys = {
  name: 'Denny\'s',
  employees: [{ name: 'Fred' }, { name: 'Angela' }],
  logEmployeeName: function(employee) {
    console.log(`Employee: ${employee.name}\tRestaurant: ${this.name}`);
  }
}

dennys.logEmployeeName(dennys.employees[0]) // Log: Employee: Fred	Restaurant: Denny's
dennys.employees.forEach(dennys.logEmployeeName)

// We get these two log statements:
//  * Log: Employee: Fred	Restaurant:
//  * Log: Employee: Angela	Restaurant:
//
// We know that we can explicitly set the value of `this`, but if we use `call`
// or `apply` where the callback should be, we actually get the result of the
// call. We get an error right away if we try to save a bound copy of that function.

// const logEmployeeNameBroken = dennys.logEmployeeName.call(dennys) // Error: TypeError: Cannot read property 'name' of undefined

// Here's where we use `Function.prototype.bind`, which creates a copy of a
// function, sets the execution context passed to bind, and does NOT call the
// function.

const logEmployeeNameBound = dennys.logEmployeeName.bind(dennys)
console.log(logEmployeeNameBound) // Log: ƒ (employee) { console.log(`Employee: ${employee.name}\tRestaurant: ${this.name}`); }

dennys.employees.forEach(logEmployeeNameBound)

// We now get these two (correct) log statements:
//  * Log: Employee: Fred	Restaurant: Denny's
//  * Log: Employee: Angela	Restaurant: Denny's
//
// `bind` can additionally take arguments to the original function and apply them.

const library = {
  name: 'ironboard-js',
  version: '1.2.1',
  logProp: function (key) {
    console.log(this[key])
  },
  logDelay: function(callback) {
    setTimeout(callback, 2000)
  },
  logInfo: function() {
    this.logDelay(function() {
      this.logProp('name')
      this.logDelay(function() {
        this.logProp('version')
      }.bind(this))
    }.bind(this))
  },
  logInfoArrow: function() {
    // Same as function above but without using `bind`
    this.logDelay(() => {
      this.logProp('name')
      this.logDelay(() => {
        this.logProp('version')
      })
    })
  }
}

library.logProp('name') // Log: ironboard-js
library.logProp('version') // Log: 1.2.1
library.logInfo()

const starWars = {
  time: 0,
  lines: ["In a galaxy far, far away", "Something else", "I don't know this", "*****"],
  logDelay: function(callback) {
    const time = this.time++
    setTimeout(callback, (time * 1000))
  },
  scrollLines: function() {
    this.lines.forEach(function(line) {
      this.logDelay(function() { console.log(line) })
    }.bind(this))

    return '*****'
  }
}
// –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
