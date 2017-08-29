//   * Control Flow
//     * `if...else`
//     * `switch`
//     * Conditional operator
//   * Variables
//     * Declaration
//     * Scope
//     * Hoisting
//   * Functions
//     * Reference
//     * Execution

// let isStudent = false
// let isInstructor = false
//
// if (isStudent) {
//   console.log("I'm a student")
// } else if (isInstructor) {
//   console.log("I'm an instructor")
// } else {
//   console.log("I'm not a student and I'm not an instructor")
// }

// let age = 50
//
// switch (age) {
//   case 20:
//   case 50:
//     console.log('In my 20s')
//     break
//   case 50:
//   case 51:
//     console.log('In my 50s')
//     break
//   default:
//     console.log('Age is not registered');
// }

// Ruby
// greeting = if age == 50
//              'hello'
//            else
//               'goodbye'

// JavaScript
// let greeting = if (age === 50) {
//                   'hello'
//                 } else {
//                   'goodbye'
//                 }

// let age = 50
// let greeting = age === 50 ? 'hello' : 'goodbye'


// Variable Declaration
// /* no keyword */global = 'global variable'
// var lexically_scoped_variable = 'lexically scoped'
// let block_scoped_variable = 'block scoped'
// const const_block_scoped_variable = 'constant block scoped'
//

// function variablesAndBasicScope() {
//   /* Variables are declared with a keyword `var`/`let`/`const` or globally
//    * without a keyword. The keyword as well as the location of the variable
//    * declaration determines the scope of the variable. Generally, we have three
//    * scopes:
//    *    1. Global scope
//    *       Variables initially declared without a leading keyword that are
//    *       accessible from any scope.
//    *    2. Lexical scope
//    *       Variables initially declared with the keyword `var`. Lexical scope
//    *       is created in the context of a new function. It can be thought of as
//    *       function scope. Hoisting happens with lexically scoped variables.
//    *    3. Block scope
//    *       Variables initially declared with the keywords `const` and `let` are
//    *       block scoped. A block is generally a set of curly braces (`{}`).
//    *       Blocks are commonly used with `if` and `for` statements and create
//    *       a new scope for that variable to exist within.
//    */
//
//   // VARIABLES
//   global_scope_var        = 'initially declared global var';
//   var lexical_scope_var   = 'initially declared lexical scope var';
//   let block_scope_var     = 'initially declared block scope var';
//   const block_scope_const = 'initially declared block scope const';
//
//   // What values should these calls to `console.log` print?
//   console.log('Printing initially declared variables...\n');
//   console.log(global_scope_var);   // Value?
//   console.log(lexical_scope_var);  // Value?
//   console.log(block_scope_var);    // Value?
//   console.log(block_scope_const);  // Value?
//   console.log('\n');
//
//   // SCOPE
//   function updateScope() {
//     global_scope_var        = 'reassigned global var';
//     lexical_scope_var       = 'reassigned lexical scope var';
//     let old_block_scope_var = block_scope_var
//     let block_scope_var     = 'reassigned block scope var';
//     const block_scope_const = 'NEWLY declared block scope const';
//
//     // What values should these calls to `console.log` print?
//     // What happens to the reassigned lexical scope var when we uncomment line 38?
//     console.log('Printing variables from inner function scope...\n');
//     console.log(global_scope_var);   // New or reassigned?
//     console.log(lexical_scope_var);  // New or reassigned?
//     console.log(block_scope_var);    // New or reassigned?
//     console.log(block_scope_const);  // New or reassigned?
//     console.log('\n');
//   }
//
//   // What values change when we call `updateScope`?
//   console.log('Updating scope...');
//   updateScope();
//
//   console.log('Printing variables from outer function scope...');
//   console.log(global_scope_var);   // Changed?
//   console.log(lexical_scope_var);  // Changed?
//   console.log(block_scope_var);    // Changed?
//   console.log(block_scope_const);  // Changed?
//   console.log('\n');
// }


// Hoisting
function hoisted() {
  for (let i = 0; i < 10; i++) {
    console.log('in the loop', i)
  }

  console.log('after the loop', i)
  console.log('after the loop again', i)
}

// Hoisting with global scope example console.log
