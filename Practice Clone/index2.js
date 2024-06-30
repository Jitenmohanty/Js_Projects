
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


const config = [
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1],
];

// console.log(config.flat(1).filter(Boolean).length)


//Create a promise;

const promise = new Promise((res,rej)=>{
  let ans  = true;
  
  setTimeout(()=>{
    if(ans){
      res();
    }else rej();
  },1000)
})

// console.log(promise.then(()=>{console.log("answer")}).catch(error => console.log(error)))

const str = "Jitu";
// console.log(str)

async function check(){
  await Promise.resolve(console.log("Hello"))//2
  console.log("object")
}
// console.log("Start")//1
// check();
// console.log("End")//3

hoisted()
// console.log(notHoisted()) 

 function hoisted (){
  console.log("Hoisted")
}

 const notHoisted = ()=>{
  console.log("Hoisted")
}

console.log(pitter)

var pitter = 4555;


//Let and const follows temporal dead zone which means the values are not accessable before initialization.

function letConstDiff(){
  
  let p = 10;
  p = 20
  // const  p = 10;not work
  //const q;not work
  // p = 20
  console.log(p)
  function cer(){
    let p = 55;
    console.log(p)
  }
  cer()
}

letConstDiff();


// Call,Applay,Bind;

const obj1 = {
    name: "Jiten",
    class:9,
    fn:function(){console.log(this.name," Class:", this.class )}
}

const obj2 = {
  name:"Jitu",
  class:"11"
}

function global(){
  console.log(this)
}
function tear(rain){

  return {pit:rain}
}

// global()
const context = tear(5555)

console.log(global.call(context))

// console.log(obj1)
// console.log(obj1.fn.call(obj2))

function sum() {
  return Array.prototype.reduce.call(arguments, (acc, num) => {
   return acc + num
  }, 0);
}

console.log(sum(1, 2, 3, 4, 5)); // Output: 15

//Apply use
function greet(name, age,nickname) {
  console.log(`Hello, my name is ${name} and I am ${age} years old Bhai ka name ${nickname}.`);
}

const args = ['Alice', 30,"Lodi"];
greet.apply(null, args); // Output: Hello, my name is Alice and I am 30 years old.









