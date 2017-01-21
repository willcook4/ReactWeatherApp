// // Older Callback Method
//
// function getTempCallback (location, callback) {
//   callback(undefined, 78);
//   callback('City not found');
// }
//
// getTempCallback('Philadelphia',function(err, temp){
//   if(err) {
//     console.log('Error', err);
//   } else {
//     console.log('Sucess', temp);
//   }
// });
//
// // Using ES6 Promises
//
// function getTempPromise (location) {
//   return new Promise(function( resolve, reject){
//     setTimeout(function(){
//       resolve(79);
//       reject('City not found');
//     }, 1000);
//   });
// }
//
// getTempPromise('Philadelphia').then(
//   // Success / Resolve
//   function(temp){
//     console.log('promise sucesss', temp);
//   },
//   // Error / Reject
//   function(err){
//     console.log('Promise Error', err);
//   }
// );

// Challenge
// Promise to resolve if

function addPromise(a, b) {
  return new Promise(function(resolve, reject){
    if (typeof a === 'number' && typeof b === 'number') {
      resolve(a + b);
    } else {
      reject('One of the numbers is not a number');
    }
  });
}

// Both strings
addPromise('a', 'b').then(
  function(returnedAnswer) {
    console.log('Answer equals', returnedAnswer);
  }, function (err) {
  console.log('Error:', err);
});

addPromise(3, 'b').then(
  function(returnedAnswer) {
    console.log('Number', returnedAnswer);
  }, function (err) {
  console.log('Error:', err);
});

addPromise('a', 5).then(
  function(returnedAnswer) {
    console.log('Number', returnedAnswer);
  }, function (err) {
  console.log('Error:', err);
});

addPromise(3, 5).then(
  function(returnedAnswer) {
    console.log('Number', returnedAnswer);
  }, function (err) {
  console.log('Error:', err);
});