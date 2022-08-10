//Declaration
const myArray = [];
const myArrayA = ["A","B","C"];
const myArrayB = ["D","E","F"];

//Add Elements
myArray[0] = "Gonzalo";
myArray[1] = 31;
myArray[2] = false;

//refer to an array
console.log(myArray);

//length
console.log(myArray.length);

//last element
console.log(myArray[myArray.length-1]);

//push
myArray.push("UTN");
console.log(myArray);

//pop
myArray.pop();
console.log(myArray);

//shift
myArray.shift();
console.log(myArray);

//unshift
myArray.unshift('Gonzalo');
console.log(myArray);

//slice
const ArraySection = myArray.slice(1,2);
console.log(ArraySection);

//splice
myArray.splice(0,1);
console.log(myArray);

//reverse
myArray.reverse();
console.log(myArray);

//join
const arrayjoined = myArray.join();
console.log(arrayjoined);

//spread
const newArray = [...myArrayA, ...myArrayB];
console.log(newArray)