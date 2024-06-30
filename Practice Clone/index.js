// console.log(x)
// {
//     var x =2;
//     {
//         let x = 5;
//         console.log(x)
//     }
//     console.log(x)
// }

const arr = [1, 10, 3, 5, 89];
arr.splice(1, 2, 55, 89, 20);

// {Splice takes start index to how many element delete but it don't count start index,it was changes inside original array also it is take 3rd argument element once to insert on that position}
// {Slice takes start index to how many element delete but it don't count start index}
const carr = arr.slice(1, 4);
// console.log(arr);
// console.log(carr, "kilo");

const ans = arr.map((a) => a >= 5);
const ans2 = arr.filter((a) => a >= 5);
// console.log(ans);
// console.log(ans2);

const arr3 = ["asd", "bsd", "Asert", "kilo", [45, 99]];
const arr6 = ["asd", "bsd", "Asert", "kilo", "Lodi"];
const arr4 = [8, 6, 852, 259];
const arr5 = [].concat(...arr3, arr4);
// console.log(arr5);
// console.log(arr6.toString());
// console.log(arr6.join("/"));
// console.log(arr6.slice(-2));
// console.log(arr4.some((n) => n === 8));

// Input array
let arrasy = [1, 2, 3, 4, 5, 6, 7];

// Placing from index position 0 the
// Element from index 4
// console.log("Array " + arrasy.copyWithin(0, 6));
// console.log("Too Much");
// console.log(array.map((e, i) => console.log(e, i)));

// input array contain some elements.
let ard = [
  [1, 2, 3],
  [4, 5, 6],
];

let array = [1, 2, 3, 2, 4, 6];
// Here array.fill function fills with 0
// from position 2 till position 3.
// console.log(array.fill(0, 2, 4));
// console.log(ard.flat(1).fill(0));
// console.log(array.find((e, i) => e == 2));
//It always return first index of that element,if not there then return -1
// console.log(array.findIndex((e) => e === 2));
// console.log(array.flatMap((num) => [num * 2, num ** 2]));
function fn(arr, element) {
  let isElem = arr.indexOf(element);
  console.log(isElem);
  if (isElem > 0) {
    arr.splice(isElem, 1);
  }
  return arr;
}
// console.log(fn(array, 9));
// console.log(array.lastIndexOf(2));

//Otp Generator.

const otpGenerator = (length) => {
  let otp = "";
  for (let i = 0; i < length; i++) {
    otp += Math.floor(Math.random() * 10).toString();
  }
  return otp;
};

// console.log(otpGenerator(6));

// Object to property fillter

const studentData = [
  { name: "Jitu", roll: 5, class: "VI", Marks: 300 },
  { name: "Kitu", roll: 9, class: "IV", Marks: 400 },
  { name: "Mitu", roll: 7, class: "VII", Marks: 500 },
];

let names = [];
for (let i = 0; i < studentData.length; i++) {
  names.push(studentData[i].name.toUpperCase());
}
// console.log(names);

const totalMarks = studentData.reduce((accumulator, currentValue) => {
  return (accumulator += currentValue.Marks);
}, 0);
// console.log(totalMarks);
const allNames = studentData.reduce((accumulator, currentValue) => {
  return accumulator.concat(currentValue.name.toUpperCase());
}, []);
// console.log(allNames);
const ObjectNames = studentData.reduce((accumulator, currentValue) => {
  accumulator[currentValue.name] = currentValue.name.toUpperCase();
  return accumulator;
}, {});
// console.log(ObjectNames);

//create Your own flatten array methods.
const flattenArray = (arr) => {
  let ans = [];
  // arr.forEach((e) => {
  //   if (Array.isArray(e)) {
  //     ans = ans.concat(flattenArray(e));
  //   } else {
  //     ans.push(e);
  //   }
  // });
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      ans = ans.concat(flattenArray(arr[i]));
    } else {
      ans.push(arr[i]);
    }
  }
  return ans;
};
const flattenArr = [5, 10, [5, 6], 88];
// console.log(flattenArray(flattenArr));

const arrayOfObject = studentData.reduce((group, person) => {
  if (group[person.name] === null) {
    group[person.name] = [];
  }
  group[person.name]=person;
  return group;
}, {});

// console.log(arrayOfObject);

const g = Object.groupBy(studentData, (person) => person.name);
// console.log(g);

//Array Push Method Own

Array.prototype.myPush = function(...element){
  
  for(let i=0;i<element.length;i++)
  this[this.length] = element[i];
  
    return this.length;
}
Array.prototype.myPop = function(){
if(this.length === 0)return undefined;

  let lastIndex = this.length-1;
  let lelem = this[lastIndex]
  this.length = this.length-1;
  
    return lelem;
}
let arrCusttom = [5,6,8,9,4];

arrCusttom.myPush(99,66,77);
// console.log(arrCusttom.myPop())

// console.log(arrCusttom)

const arrayToObject = [10,5,4,4,6,6,9];

const ansObject = arrayToObject.reduce((acc,curr)=>{
  // console.log(acc)
    if(!acc[curr]) acc[curr] = 1;
    else acc[curr]++;
    return acc;
},{})

console.log(ansObject)