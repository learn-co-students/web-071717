// MODULE PATTERN --------------------------------------------------------------
//
// If we need to have some private state, we need a scoping/organization
// mechanism to do that. In Ruby, we have the `module` keyword that works like:
//
// ```ruby
// module FunctionalLibrary
//    @@private_var = 'something private'
// end
// ```
//
// In JavaScript, we have to create the module ourselves. We do it like this:
//
// ```javascript
// function module() {
//    let privateVar = 'something private'
// }
// ```
//
// Looks just like a regular function. The point here is that a function allows
// us to encapsulate private information that is only available in the scope of
// the function. In order to turn this into a full module (where only one copy
// exists in our application), we need to call the function right away. This is
// called an immediately-invoked function expression.
//
// ```javascript
// (function module() {
//    let privateVar = 'something private'
// })()
// ```
//
// This creates a function that creates a private variable while the function
// exists, but that's not useful for us, because running the above code happens
// in a fraction of a second and that private information is lost and can no
// longer be modified. We need to expose something to the scope that calls the
// function.
//
// ```javascript
// const myPublicVar = (function module() {
//    let privateVar = 'something private'
//    let publicVar = 'something public'
//    return publivVar
// })()
//
// console.log(myPublicVar) -> 'something private is exposed when I am returned'
// ```
//
// This is still pretty limiting for us. Instead of returning just one value,
// generally modules contain useful information as well as useful methods, and
// we want to be able to work with both of them in the scope that the module
// is created in. Consider this example from Ruby:
//
// ```ruby
// module FunctionalLibrary
//    PUBLIC_VAR = 'something public'
//    @@private_var = 'something private'
//
//    def publicMethod
//      puts @@private_var
//    end
// end
// ```
//
// Similarly, in JavaScript, we would return a public method from the module.
//
// ```javascript
// const myModule = (function module() {
//    let privateVar = 'something private'
//
//    return {
//      publicVar: `${privateVar} is exposed when I am returned`,
//      publicMethod: function() { console.log(privateVar) }
//    }
// })()
//
// console.log(myModule) -> {publicVar: ..., publicMethod: ...}
// ```
// -----------------------------------------------------------------------------

const myModule = (function module() {
  return {
    each: each,
    map: map,
    filter: filter,
    find: find
  }
})()
