// EVOLUTION OF OBJECT CREATION ––––––––––––––––––––––––––––––––––––––––––––––––

// Object literals
  // restaurant has a name and a list of employees

  let tgif = {
    name: "T.G.I. Monday's",
    employees: [{ name: "Martina"}, { name: "Luke"}, { name: "Roman X." }]
  }

  let chinaChalet = {
    name: "France Chalet",
    employees: [{ name: "Daniel" }, { name: "Joe" }, { name: "Matt" }]
  }

  tgif.name = "T.G.I. Friday's"
  chinaChalet.name = "China Chalet"

  // Primitives are passed by value

  let a = 1
  let b = a
  b === a // true

  b = 0
  b === a // false

  // Objects are passed by reference, NOT by value

  let dennys = tgif
  dennys.name = "Denny's"
  dennys.employees = [{ name: 'Fred' }]

  dennys // { name: "Denny's", employees: [{ name: 'Fred' }] }
  dennys === tgif // true 😱

  // This means that if you try to make a copy of an Object
  // by just reassigning it, you will always hold on to a reference
  // of that object. Instead we should copy it.

  tgif = {
    name: "T.G.I. Friday's",
    employees: [{ name: "Martina"}, { name: "Luke"}, { name: "Roman X." }]
  }

  dennys = Object.assign({ name: "Denny's" }, tgif)

  dennys === tgif


// Object literals with methods
  // restaurant has a name and a list of employees
  // restaurant can print list of employees

  tgif = {
    name: "T.G.I. Friday's",
    employees: [{ name: "Martina"}, { name: "Luke"}, { name: "Roman X." }],
    listEmployees: function listEmployees() {
      this.employees.forEach(function(employee) {
        console.log(`Restaurant: ${this.name}\tEmployee: ${employee.name}`)
      })
    }
  }

  chinaChalet = {
    name: "China Chalet",
    employees: [{ name: "Daniel" }, { name: "Joe" }, { name: "Matt" }],
    listEmployees: function listEmployees() {
      // const arrow = (arg1, arg2) => { console.log(arg1, arg2); return 'hello' }
      // Arrow fns automatically bind function `this` to the parent execution context
      this.employees.forEach((employee) => {
        console.log(`Restaurant: ${this.name}\tEmployee: ${employee.name}`)
      })
    }
  }

  tgif.listEmployees() // Restaurant: T.G.I. Friday's   Employee: Martina
  chinaChalet.listEmployees() // Restaurant: China Chalet   Employee: Daniel

  // Since these functions are the same, I can move the function definitions
  // outside of the object defitions and just define the function once,
  // to be shared with all restaurant objects

  function listEmployees() {
    // const arrow = (arg1, arg2) => { console.log(arg1, arg2); return 'hello' }
    // Arrow fns automatically bind function `this` to the parent execution context
    this.employees.forEach((employee) => {
      console.log(`Restaurant: ${this.name}\tEmployee: ${employee.name}`)
    })
  }

  tgif = {
    name: "T.G.I. Friday's",
    employees: [{ name: "Martina"}, { name: "Luke"}, { name: "Roman X." }],
    listEmployees: listEmployees
  }

  chinaChalet = {
    name: "China Chalet",
    employees: [{ name: "Daniel" }, { name: "Joe" }, { name: "Matt" }],
    // JavaScript ES6 object property shorthand allows you to write the property like this
    // If the property name `listEmployees` and the variable name `listEmployees` are
    // the same, it's unnecessary to write it like `listEmployees: listEmployees`
    // and you can simply put the variable name
    listEmployees
  }

  tgif.listEmployees()
  chinaChalet.listEmployees()


// What is a prototype?
  // It's an object, that's a collection of properties and methods
  // that's inherited by other objects, here the restaurant prototype
  // is inherited by `chinaChalet`, so that chinaChalet can find
  // the `type` property and the `listEmployees` method without defining
  // it explicitly on `chinaChalet`

  let restaurantPrototype = {
    category: 'restaurant',
    listEmployees: listEmployees
  }

  chinaChalet = Object.create(restaurantPrototype)
  chinaChalet.name = "China Chalet"
  chinaChalet.employees = [{ name: "Daniel" }, { name: "Joe" }, { name: "Matt" }]

  chinaChalet.category // restaurant
  chinaChalet.listEmployees() // Restaurant: China Chalet   Employee: Daniel


// Object factories
  // Factory: function that returns an object

  let basePrototype = {
    sayHello: function() {
      console.log('hello')
    }
  }

  function baseFactory(name) {
    const newObj = Object.create(basePrototype)

    newObj.name = name

    return newObj
  }

  const baseObject = baseFactory('new base object')
  baseObject.sayHello()

  // This line will override the sayHello method on the prototype
  baseObject.sayHello = 'say hello'
  baseObject.sayHello() // Error: sayHello is not a function

  // restaurant factory
  // create prototype with method to print list of employees: restaurantPrototype is defined above
  // function to create restaurant with name and a list of employees
  function restaurantFactory(name, employees) {
    const rest = Object.create(restaurantPrototype)

    rest.name = name
    rest.employees = employees

    return rest
  }


// Object constructors
  // function to create restaurant with name and a list of employees
  // define prototype methods / properties

  // new RestaurantConstructor -> an instance of RestaurantConstructor
  function Restaurant(name, employees) {
    this.name = name
    this.employees = employees
  }

  // When a new function is created, a prototype object is attached to it
  Restaurant.prototype // {}
  Restaurant.prototype.listEmployees = listEmployees

  // OR
  // Restaurant.prototype = restaurantPrototype

  tgif = new Restaurant('tgif', [{ name: 'Maria' }])
  tgif.listEmployees()

// Instances and Classes in JavaScript (methods and properties)
  // Instance methods and properties are defined on the prototype of the constructor

  Restaurant.prototype.instanceProperty = 'basic instance property'
  Restaurant.prototype.instanceMethod = function instanceMethod() {
    console.log('basic instance method')
  }

  tgif.instanceProperty // basic instance property
  tgif.instanceMethod() // Log: basic instance method

  // Class methods and properties are defined on the constructor itself

  Restaurant.classProperty = 'basic class property'
  Restaurant.classMethod = function classMethod() {
    console.log('basic class method');
  }

  Restaurant.classProperty // basic class property
  Restaurant.classMethod() // Log: basic class method

// Inheritance in JavaScript
  // create fast-food restaurant constructor
  // set the prototype of the fast-food restaurant to copy of restaurant prototype
  // set the constructor of fast-food restaurant prototype to fast-food constructor

  function FastFoodRestaurant(name, employees, valueMenu = true) {
    this.name = name
    this.employees = employees
    this.valueMenu = valueMenu
  }

  FastFoodRestaurant.prototype = Object.assign(Restaurant.prototype)
  FastFoodRestaurant.prototype.constructor = FastFoodRestaurant

  let mcd = new FastFoodRestaurant('McDonald\'s', [{ name: 'Reginald' }])
  mcd.valueMenu // true
  mcd.listEmployees() // Restaurant: McDonald's   Employee: Reginald

  // We get a copy of all instance methods. But what about class methods and properties?

// Class Syntax
  // Instances and classes (methods and properties)
  // Inheritance

  class RestaurantClassSyntax {
    // Inside of here, you can ONLY define methods, either
      // Class methods
      // Instance methods

    // define how `new Restaurant` works
    constructor(name, employees) {
      this.name = name
      this.employees = employees
    }

    // chinaChalet.listEmployees
    listEmployees() {
      console.log('Listing employees')
    }

    // Restaurant.startChain
    static startChain() {
      console.log(this)
      console.log("I'm starting a chain");
    }

    // define how `chinaChalet.name` works
    // get name() {
    //
    // }
    //
    // // define how `chinaChalet.name = ` works
    // set name(newName) {
    //   return newName.toLowerCase()
    // }
  }

  class FastFoodRestaurantClassSyntax extends RestaurantClassSyntax {
    constructor(name, employees, valueMenu = true) {
      super(name, employees)
      this.valueMenu = valueMenu
    }

    somethingElse() {
      console.log('Im doing something else');
    }
  }


// Private members (properties and methods) in JavaScript class syntax
  // Create a function that returns the constructor / class
  // Create variables in parent function, and use those variables
  // Inside of the constructor / class syntax
  function createRestaurantConstructor() {
    const all = []
    let id = 0

    return class Restaurant {
      constructor(name) {
        this.name = name
        this.id = id++
        all.push(this)
      }

      static all() {
        return all
      }
    }
  }

  const RestaurantConstructor = createRestaurantConstructor()
  let newRestaurant = new RestaurantConstructor('some name', [{ name: 'someone'}])
  RestaurantConstructor.all() // [ newRestaurant ]
  RestaurantConstructor.id // undefined

// –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
