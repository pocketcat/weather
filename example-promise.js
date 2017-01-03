// function getTempPromise (location) {
//   return new Promise(function (resolve, reject) {
//     resolve(79);
//     reject('City not found');
//   });
// }
//
// getTempPromise('London')
//   .then(function (temp) {
//     console.log('promise success', temp);
//   }, function (err) {
//     console.log('promise error', err);
//   });

function addPromise (a, b) {
  return new Promise(function (resolve, reject) {
    if (typeof a === 'number' && typeof b === 'number') {
      resolve(a + b);
    } else {
      reject('Please enter a number');
    }
  });
}

addPromise(10, 4)
  .then(function (sum) {
    console.log('promise success',  sum);
  }, function (err) {
    console.log('promise error', err);
  });
