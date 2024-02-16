
function find() {
  let a = [];
  for (let i = 0; i < 10000; i++) {
    a[i] = i * i;
  }
  return function (index) {
    return a[index];
  };
  console.log(a[index]);
}
// const finds = find();
// console.time("6");
// finds(6); // this takes 37ms
// console.timeEnd("6");
// console.time("12");
// finds(12); // this takes 135ms
// console.timeEnd("12");

// How to create a private variable and use inside closure;

function counter() {
  var _counter = 0;
  function add(incriment) {
    return (_counter += incriment);
  }
  function retrive() {
    return "Counter =" + _counter;
  }
  return { add, retrive };
}

const c = counter();
c.add(5);
// console.log(c.retrive());

// What is module Partern
var Module = function () {
  function privateMethod() {
    console.log("private");
  }
  return {
    publicMthod: function () {
      console.log("public");
    },
  };
};

const module = Module();
// module.publicMthod();
// module.privateMethod();

//Make the Function run once;

function LikeVideo() {
  let call = 0;

  return function () {
    if (call > 0) {
      console.log("Already Subscribed!");
      return;
    } else {
      console.log("Subscribed");
      call++;
    }
  };
}

const Once = LikeVideo();
// Once();
// Once();
// Once();
// Once();
// ...Make it more generic code.Once Polyfils.

function OnceCall(fn, context) {
  let ran;
  return function () {
    if (fn) {
      ran = fn.apply(context || this, arguments);
      // console.log(arguments);
      fn = null;
    }
    return ran;
  };
}

const funcs = OnceCall((a, b) => console.log("Run", a, b));
//It call only once bcz of we func set to null;
// funcs(1, 2);
// funcs(1, 2);
// funcs(1, 2);

const arr = [10, 5, 3, 2, 9, 7, 6];

function rotateArr(arr, d, n) {
  const rotatedArray = [];

  for (let i = 0; i < n; i++) {
    const newIndex = (i + d) % n;
    rotatedArray[newIndex] = arr[i];
  }
  return rotatedArray;
}

function reverseArray(arr, start, end) {
  while (start < end) {
    const temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
}

// console.log(rotateArr(arr, 2, 7));
// console.log(arr);
// console.log(reverseArray(arr, 0, 6));
// console.log(arr);
