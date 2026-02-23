//level 1

// console.log("Base 3");

// setTimeout(() => {
//   console.log("base 1");
// },0);

// console.log("Base 2")

// level 2

// console.log("sync 4");

// setTimeout(() => {
//   console.log("web api 1");
// },0);

// Promise.resolve().then(() => {
//    console.log("promise 2");
// },2000);

// console.log("sync 3");

//level 3

// console.log("start");

// Promise.resolve().then(() =>{
//     console.log('promise 1');
// });

// Promise.resolve().then(() => {
//     console.log("promise 2");
// });

// console.log("end")

//level 04

// console.log("Start");

// setTimeout(() => {
//   console.log("Timeout 1");

//   setTimeout(() => {
//     console.log("Timeout 2");
//   }, 0);

// }, 0);

// console.log("End");

//level 5

// console.log("Start");

// setTimeout(() => {
//   console.log("Timeout");

//   Promise.resolve().then(() => {
//     console.log("Promise inside Timeout");
//   });

// }, 0);

// console.log("End");

//trickey l1

// console.log("1");

// setTimeout(() => console.log("2"), 0);

// Promise.resolve().then(() => console.log("3"));

// Promise.resolve().then(() => {
//   setTimeout(() => console.log("4"), 0);
// });

// console.log("5");

console.log("A");

setTimeout(() => console.log("B"), 0);

Promise.resolve()
  .then(() => {
    console.log("C");
  })
  .then(() => {
    console.log("D");
  });

console.log("E");