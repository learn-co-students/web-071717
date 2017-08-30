// CLOSURES --------------------------------------------------------------------
//
// Closures are a tool in programming that allow us to give objects data
// privacy. Consider this object literal:
//
// ```javascript
// let publicAndPrivateInfo = {
//    privateInfo: 'something private about me',
//    publicInfo: 'something public about me',
//    methodUsingPrivateInfo: function() {
//      console.log(`${this.privateInfo}`)
//    }
// }
//
// publicAndPrivateInfo.publicInfo -> 'something public about me'
// publicAndPrivateInfo.privateInfo -> 'something private about me'
// ```
//
// If anyone accesses our `publicAndPrivateInfo` object, they are able to see
// all public and all private data that relates to the object. This is a problem
// in programming in JavaScript, and closures provide a solution for us.
//
// ```javascript
// function createClosure() {
//    let privateInfo = 'something private about me';
//
//    return {
//      publicInfo: 'something public about me',
//      methodUsingPrivateInfo: function() {
//        console.log(`${privateInfo}`)
//      }
//    }
// }
//
// publicAndPrivateInfo = createClosure()
// publicAndPrivateInfo.publicInfo -> 'something public about me'
// publicAndPrivateInfo.privateInfo -> undefined
// ```
//
// Our function above creates a private variable, `privateInfo`, in its body.
// Instead of being defined directly on the object that we're returning, we are
// defining it in the scope of the `createClosure` function.
//
// -----------------------------------------------------------------------------

function createClosure() {
   let privateInfo = 'something private about me';

   return {
     publicInfo: 'something public about me',
     methodUsingPrivateInfo: function() {
       console.log(`${privateInfo}`)
     }
   }
}

publicAndPrivateInfo = createClosure()
publicAndPrivateInfo.publicInfo // 'something public about me'
publicAndPrivateInfo.privateInfo // undefined
publicAndPrivateInfo.methodUsingPrivateInfo()

// NEXT: Checkout `modulePattern.js` to see how to use closures to create
// JavaScript modules
