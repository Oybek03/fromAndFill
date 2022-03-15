console.log([1, 2, 3, 5, 6, 5, 7]);
console.log(new Array(1, 2, 3, 4, 7, 8, 9));

let x = new Array(10);
x.fill(1, 2, 3);
console.log(x);

let arr = new Array(10);

// fill(element,startIndex, endIndex)

arr.fill(5, "", 5);
console.log(arr);

let y = [4, 5, 6, 7, 9];
let newY = Array.from(y, function (val, key) {
  return val * 2;
});
console.log(newY);

let arr2 = Array.from({ length: 10 }, (val, key) => key + 3);

console.log(arr2);
