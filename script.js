// console.log([1, 2, 3, 5, 6, 5, 7]);
// console.log(new Array(1, 2, 3, 4, 7, 8, 9));

// let x = new Array(10);
// x.fill(1, 2, 3);
// console.log(x);

// let arr = new Array(10);

// // fill(element,startIndex, endIndex)

// arr.fill(5, "", 5);
// console.log(arr);

// let y = [4, 5, 6, 7, 9];
// let newY = Array.from(y, function (val, key) {
//   return val * 2;
// });
// console.log(newY);

// let arr2 = Array.from({ length: 10 }, (val, key) => key + 3);

// console.log(arr2);

// console.log("sync1");
// setTimeout(function () {
//   console.log("async");
// }, 0);

// Promise.resolve("promise").then(function (res) {
//   console.log(res);
// });

// console.log("sync2");

let a = async function (name1, name2, name3) {
  const data = Promise.all([
    fetch(`https://restcountries.com/v2/name/${name1}`),
    fetch(`https://restcountries.com/v2/name/${name2}`),
    fetch(`https://restcountries.com/v2/name/${name3}`),
  ]);
  // console.log(data);
  // data.forEach((val) => {
  //   val.json().then((res) => {
  //     console.log(res[0].capital);
  //   });
  // });

  let timeout = function (sec) {
    return new Promise(function (resolve) {
      setTimeout(function () {
        resolve(new Error("internet sekin"));
      }, sec * 1000);
    });
  };
  const data1 = await Promise.race([data, timeout(0.01)]);
  console.log(data1);
};

a("uzbekistan", "usa", "kz");
