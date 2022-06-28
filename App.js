
// Day 8 Javascript with buttons


function buttonClick(buttonsArr,rotate){
    console.log(rotate);
    for(let i=0;i<1;i++){
        let initalVal = buttonsArr[0];
        for(let j=0;j<buttonsArr.length-1;j++){
            buttonsArr[j] = buttonsArr[j+1];
        }
        buttonsArr[buttonsArr.length-1] = initalVal;
    }
    printButtons(buttonsArr)
    console.log(buttonsArr);
    // console.log(count);
}

function printButtons (buttonsArr){
    let buttonCluckCount = 0;
    const printbtn = document.getElementById("printbtns");
    console.log(printbtn);
    for(let i=0;i<buttonsArr.length;i++){
        var btn = document.createElement("button");
        btn.innerHTML = buttonsArr[i];
        btn.id =`btn${buttonsArr[i]}`
        btn.onclick=() => {
            buttonCluckCount = buttonCluckCount + 1;
            buttonClick(buttonsArr,buttonCluckCount)
        }
        printbtn.appendChild(btn);
    }
}
// printButtons([1,2,3,4,5,6,7,8,9]);



async function myFunction(){
    console.log(document.getElementById("head").innerText = "Venki");
    // getData()
    // .then((data) => console.log(data))
    // .catch((error) => {
    //     console.log(error);
    // })
    console.log(await getData());
    console.log("Is working") 
}

function getData () {
    return new Promise((resolve,reject) => {
        fetch("https://jsonplaceholder.typicode.com/todos/1")
        .then((res) => res.json())
        .then((data) => {
            resolve(data);
        })
        .catch((error) => {
            reject(error);
        })
    }) 
}

function getInputData(e){
    console.log(e)
}

// Example of Closure
function outerFn(val){
    var name="Venkateshwaran";
    function innerFn(){
        console.log("My name is" + name + "My full name is" + val);
    }
    return innerFn;
}
const closureFn = outerFn('Venkateshwaran M');
// Javascript array methods

// Array basic methods

// Concat method
let arr1 = [1,2,3];
console.log(arr1.concat([4,5]));

// Slice method
let arr2 = [1,2,3,4];
console.log("Slice result array ================>",arr2.slice(1,3));
console.log("After the slice array ==============>",arr2);

// Reverse method
let arr3=[1,2,3,4];
console.log("Reverse result array===============>",arr3.reverse());

// Join method
let arr4 = [1,2,3,4];
console.log(arr4.join(''));

// Array Manipulation
let arr5 = [1,2,3];
console.log("Array splice result ==============>",arr5.splice(0,1,4));
console.log(arr5);

// Higher order functions
// reduce()
let arr6 = [1,2,3,4,5];
console.log("Reduce result array ===============>",arr6.reduce((sum,n) => sum+n));

var arrObj = [{name:"venki",age:27},{name:"karthi",age:26},{name:"vedha",age:5},{name:"kaviya",age:10},{name:"marikani",age:37}];

// Filter method
let filterResult = arrObj.filter((item) => {
    if(item.age > 20){
        return item;
    }
});

console.log("Filter result ==================>",filterResult);

// Find Method
// it's return top most highest value
let findResult = arrObj.find((item) => {
    if(item.age > 20){
        return item;
    }
});
console.log("findResult ==============>",findResult);


// Divide and conqire the array 

let numArr = [1,3,4,8,13,100,105];
let len = numArr.length;
console.log(len)
let init = 0;
let targetVal = 105;
let midVal = numArr[Math.round(len / 2)];
console.log(midVal)
for(i=init;i<len;i++){
    if(targetVal > midVal){
        init = numArr.indexOf(midVal);
        console.log("2nd half ==================>",numArr[i]);
    }
    if(targetVal < midVal){
        console.log(i)
        len = i;
        midVal = numArr[Math.round(len/2)];
        console.log("1st half array =======================>",numArr[i])
    }
    if(targetVal == midVal ){
        console.log("Final result =======>",midVal)
    }
    // console.log("Num array ============================>",numArr[i])
}

// Find alternate values in array

let mainArr = [1,2,3,4,5,6];

function findAlternateValue() {
    let alternateArr=[];
    for(let i=0;i<mainArr.length;i = i+2){
        console.log("Main array ========>",mainArr[i]);
        alternateArr.push(mainArr[i]);

    }
}

findAlternateValue();

// Console.log questions

let obj={
    a:"hi",
    b:20
}

let a = "b";
console.log(obj[a]);
console.log(obj["a"]);

// const area = ({width=10,height=20}) => {
//     console.log(width * height)
// }

// area();
// area({});

const x = {};
const y = {key:"y"};
const z = {key: "z"};

x[y] = 123;
x[z] = 456;
console.log(x[y]);

var demo = 'Hello';
function getDemo(){
    var test = function(){
        return demo + "my friend";
    }
    demo = demo + " How are you?";
    return test();
} 
console.log(getDemo("Hi"));
demo = "Hey";


// Recursion
// Recursion is process of calling itself,A function that calls itself is called a recursive function.

// E.g:1
function countDown(number){
    console.log(number)
    let newNumber = number -1;
    if(number > 0){
        return number * countDown(number - 1);
        // console.log(result)
    }else{
        return 1;
    }
}

let countownResult = countDown(4);
console.log("countownResult ================>",countownResult)

// E.g:2
// Find factorial of a number
function factorial(x){
    if(x == 0){
        return 1;
    }
    else{
        // console.log("X value =============>",x);
        console.log("factorial(x-1) value =============>",factorial(x-1));
        return x*factorial(x-1);
    }
}

const num = 4;

if(num > 0){
    let result = factorial(num);
    console.log("Factorial result ==================>",result)
}

// Array reverse
function arrayReverse(){
    let arr=[1,2,3];
    let start = 0;
    let end = arr.length-1;
    while(start < end){
        console.log(arr[start]);
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
    console.log(arr);
}

arrayReverse();


// SetTimeOut interview qus

// function myTimeOut(){
//     setTimeout(() => {
//         console.log(i);
//     },1000);
//     var i = 1;
// }

// myTimeOut();


// ForEach method
// Better way to loop through the array
function examppleForEach () {
    let arr = [1,2,3];
    arr.forEach((element,i) => {
        console.log(element);
    });
}

examppleForEach();

// Hosited
// function xyz () {
//     console.log(a);
//     var a = 1;
// }

// xyz();

// Qus 2 Implicit and Explicit Binding
let obj1 = {
    name:"Venkatesh",
    displayName: function(){
        console.log(this.name);
    }
}

let obj2 = {
    name:"Karthika"
}
// Implicit binding
obj1.displayName();

//This is Explicit binding
obj1.displayName.call(obj2);

// Qus 3 Implementing caching/Memiize function



// Qus4 Output based on Even loop
// https://www.jsv9000.app/ for the event loop
// console.log("a");
// setTimeout(() => console.log("b"));
// Promise.resolve(() => console.log("pro")).then((res) => res());
// console.log("c");

// Qus 5 Infinite Currying
// This is not good way
// function add (a) {
//     return function (b){
//         return function(c){
//             return function(){
//                 return a+b+c;
//             }
//         }
//     }
// }
// This is the correct way
function add(a){
    return function(b){
        if(b) return add(a+b);
        return a 
    }
}
console.log(add(1)(2)(3)(4)(5)());

// Qus 6 Implement this code

let calc = {
    total:0,
    add: function(a) {
        this.total = this.total + a;
        // This return is main , this is return whole object then only we are able to call another function
        return this;
    },
    multiply:  function(b){
        this.total = this.total * b;
        return this;
    },
    sub: function (c){
        this.total = this.total - c;
        return this;
    }
}
const result = calc.add(10).multiply(5).sub(30).add(10);
console.log(result.total);

// Map Vs ForEach

let arrData = [1,2,3,4,5];

// Map doesnot change the original array,It returns the new array
let mapResult = arrData.map((item) => {
    return item + 1;
});

let forEachResult = arrData.forEach((ele,i) => {
    return ele[i] = ele + 2;
})

console.log("Original Array ======>",arrData);
console.log("MapResult array ============>",mapResult);
console.log("ForEachResult array ============>",forEachResult);


// null Vs Undefined

// Null is a actual value
// Undefined means variable is declared but not initiziled
// Event delegation is we provide the event listener to the parent and access the child element with the help of that event

// Array flat function
let innerArray = [
    [1,2],
    [3,4,5],
    [6,7,8,[9,10]],
    [11,12,[13,14,[15,16,17]]]
];

let flatenArray = innerArray.flat(3);
console.log("flatenArray ============>",flatenArray);

// SetTimeout Qustion

function timeOutDemo(){
    for(let i=0;i<3;i++){
        // console.log(i);
        setTimeout(() => {
            console.log(i)
        },i * 1000)
    }
    console.log(i)
}

// timeOutDemo();

// Implement Promise all

function showVenkatesh(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Venkatesh")
        },2000)
    })
}

function showKarthika(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Karthika")
        },4000)
    })
}

// Promise.all([showVenkatesh(),showKarthika()])
// .then((val) =>  console.log("Promose all result ==========>",val));

// Output qustion
function checkOuput(){
    let result = 0;
    for(let i=0;i<5;i++){
        result +=i;
    }
    console.log("Result output =============>",result);
}
// checkOuput();

// Todo Debounce



// Console log out put
console.log(myFirstName);
console.log(sayHai());
var myFirstName="venkatesh";

function sayHai(){
    return "hi";
}
myName = "venki";
console.log(myName);
var myName;

// Javascript Quiz
let colorConfig={
    red: true,
    blue: false,
    greeen: true,
    yellow: false
}
const colors=["pink","red","blue"];
//console.log(colorConfig.colors[1]); // Output is type error

// Javascript course
function getClothing(val){
    if(val){
        var freezing = "It's too cool";
    }else{
        var hot = "It's too hot";
        console.log(freezing);
    }
}
// getClothing(false);

const circle = {
    radius: 10,
    color: 'orange',
    getArea: function() {
      return Math.PI * this.radius * this.radius;
    },
    getCircumference: function() {
      return 2 * Math.PI * this.radius;
    }
  };
  
  let {radius, getArea, getCircumference} = circle;
  console.log(getArea());

//   Reverse integer
function reverseInteger(val){
    let resultStr = '';
    let numVal = val.toString();
    let minusOperator=false;
    if(numVal.charAt(0) == "-"){
        minusOperator = true;
        numVal = numVal.slice(1);
    }
    let end = numVal.length-1;
    while(0<=end){
        resultStr += numVal[end];
        end--;
    }
    if(minusOperator){
        resultStr = "-" + resultStr; 
    }
    if(resultStr.charAt(0) == 0){
        resultStr = resultStr.slice(1);
    }
    console.log(resultStr);
}
reverseInteger(120);

// Linked in qus
var c = 10;
function foo(a){
    let b=8;
    const d = 10;
    return function bar(){
        return a+d+c;
    }
}

const foc=foo(7);
// memory allocation a = 1,b=2 then reallocate the a value in memory 3,that's why it prints 3,2,3
function printNum(a,b,a){
    console.log(a,b,a);
}
printNum(1,2,3);

// Reverted number
function revertedNumber(num){
    let revertedNum = 0;
    let lastDigit;
    console.log(1227 % 10);
    while(num !=0){
        lastDigit =  num % 10;
        console.log("lastDigit =================>",lastDigit);
        revertedNum = revertedNum * 10 + lastDigit;
        console.log("revertedNum ===================>",revertedNum)
        num = Math.floor(num / 10);
    }
    console.log("Final revertedNum =============>",revertedNum);
}
revertedNumber(21348);

function mergeTwoSortedArray(){
    let a = "Schools";
    let x = a.lastIndexOf("s");
    console.log(x);
    if(9>7>3 === true){
        console.log("Is working")
    }
    return {
        test: 1
    };
}
var myA = new Array(4).toString();
console.log("myA ============>",myA);
console.log("Qus 2 ============>",mergeTwoSortedArray());

let numberVal = 0;
console.log("numberVal++ =============>",numberVal++);
console.log("++numberVal =============>",++numberVal);
console.log("numberVal ==============>",numberVal);


var arrObject11 = [{
    name: "venki"
},{
    name:"sive"
}];
console.log(arrObject11.shift());

// Negative array index
let exampleNegativeArr = [1,2,3,4,5];
exampleNegativeArr[-1] = "Venki";
console.log(exampleNegativeArr.length);
console.log(exampleNegativeArr[exampleNegativeArr.lastIndexOf(99)]);

// Moving numbers
console.log(1<<32);
// adding arrays
console.log([1,2,3] + [4,5,6]);
let myArrCon = [1,2,3];
myArrCon[this.length] = 4;
console.log(myArrCon);

var hack = [{name:"venki",age:25},{name:"karthi",age:20}];


function msg(val){
    console.log(val)
}
msg(...hack);

// function leftRotation(val,noOfRotate){
//     for(let i=0;i<noOfRotate;i++){

//     }
// }

function arrayLeftRotation(arrLen,rotate){
    var resulrArray = [];
    for(let i=1;i<=arrLen;i++){
        resulrArray.push(i)
    }
    for(let k=0;k<rotate;k++){
        let initalVal = resulrArray[0];
        for(let j=0;j<resulrArray.length-1;j++){
            resulrArray[j] = resulrArray[j+1];
        }
        resulrArray[resulrArray.length-1] = initalVal;
    }
    console.log(resulrArray);
}

arrayLeftRotation(5,2);

// Pass all test cases
// function rotateLeft(d, arr) {
//     // Write your code here
//     for(let i=0;i<d;i++){
//         let initialVal = arr[0];
//         for(let j=0;j<arr.length-1;j++){
//             arr[j] = arr[j+1];
//         }
//         arr[arr.length-1] = initialVal;
//     }
//     return arr;
// }

// Javascript Quizz
console.log("1" == 1);

const value = new Set("VENKATTEV");
console.log("value ============>",[...value]);

const result12 = (1,1,2);
console.log(result12);

class User{
    getName(){

    }
}
console.log(typeof User);
User.prototype.getName(); //This is called inheritance

// Plus minus problem
function plusMinus(arr) {
    // Write your code here
    let arrLen = arr.length;
    let i=0;
    let noOfMinus = 0,noOfPlus=0,noOfZeros = 0
    while(i < arrLen){
        console.log(arr[i]);
        if(arr[i] < 0){
            noOfMinus++;
        }
        if(arr[i] > 0){
            noOfPlus++;
        }
        if(arr[i] == 0){
            noOfZeros++;
        }
        i++;
    }
    console.log(noOfPlus/arrLen)
    console.log(noOfMinus/arrLen);
    console.log(noOfZeros/arrLen)
    console.log(noOfMinus,noOfPlus,noOfZeros);
}
plusMinus([-4, 3, -9, 0, 4, 1])

// Mini-Max Sum
function miniMaxSum(arr){
    let resultArr=[];
    for(let i= 0;i<arr.length;i++){
        let newArr = [...arr];
        newArr[i] = 0;
        let result = 0;
        for(let j=0;j<newArr.length;j++){
            result = newArr[j] + result;
        }
        resultArr.push(result)
    }
    let sortedArr =  resultArr.sort((a,b) => {
        return a-b;
    });
    console.log(`${sortedArr[0]} ${sortedArr[sortedArr.length-1]}`);
}

miniMaxSum([1,2,3,4,5]);

// Time conversion
function timeConversion(s) {
    let dayNight = s.slice(s.length-2,s.length);
    let integerHour = parseInt(s.slice(0,2)) + 12;
    let resultStr = "";
    if(dayNight == "AM"){
        if(parseInt(s.slice(0,2)) == 12){
            resultStr = "00" + s.slice(2);
        }else{
            resultStr = s;
        }
    }else if(dayNight == "PM"){
        if(parseInt(s.slice(0,2)) == 12){
            resultStr = s;
        }else{
            resultStr = integerHour.toString() + s.slice(2) 
        }
    }
    else if(integerHour == 24){
        resultStr = "00" + + s.slice(2);
    }else{
        resultStr = integerHour.toString() + s.slice(2)
    }
    console.log(resultStr.substring(0,resultStr.length-2))
}
timeConversion("07:05:45PM");

// vowelsAndConsonants
function vowelsAndConsonants(s) {
    let vowelsArray = ["a","e","i","o","u"];
    let onlyVowelsStr = "";
    let onlyConstantsStr = "";
    for(let i = 0;i<s.length;i++){
        if(vowelsArray.includes(s[i])){
            onlyVowelsStr += s[i]
        }else{
            onlyConstantsStr += s[i];
        }
    }
    let combineStr = onlyVowelsStr + onlyConstantsStr;
    for(let j=0;j<combineStr.length;j++){
        // console.log(combineStr[j]);
    }
}
vowelsAndConsonants("javascriptloops");


// try,catch and finally

function reverseString(s){
    try {
        let reversrArr = s.split('').reverse();
        console.log(reversrArr)
        let resultStr = ""
        for(let i=0;i<reversrArr.length;i++){
            resultStr += reversrArr[i];
        }
        console.log(resultStr);
    }
    catch(err){
        console.log("s.split is not a function");
    }
    finally{
        console.log(s)
    }
}
reverseString("1234");

// Inheritance
class Rectangle {
    constructor(w, h) {
        this.w = w;
        this.h = h;
    }
}
/*
 *  Write code that adds an 'area' method to the Rectangle class' prototype
 */
Rectangle.prototype.area = function () {
    return (this.w * this.h);
}
/*
 * Create a Square class that inherits from Rectangle and implement its class constructor
 */
class Square extends Rectangle {
    constructor(s) {
        super(s, s)
    }
}

if (JSON.stringify(Object.getOwnPropertyNames(Square.prototype)) === JSON.stringify([ 'constructor' ])) {
    const rec = new Rectangle(3, 4);
    const sqr = new Square(3);
    
    console.log(rec.area());
    console.log(sqr.area());
} else {
    console.log(-1);
    console.log(-1);
}

// let r = readLine();
// console.log(r)
// readLine(2.6);

function getSecondLargest(nums) {
    // Complete the function
    let withOutDubilcate = new Set(nums);
    let sortedArr = [...withOutDubilcate].sort((a,b) => {
        return a-b;
    })
    console.log(sortedArr[sortedArr.length-2]);
}
getSecondLargest([2,3,6,6,5])

// Day 2 Find LonelyInteger
function lonelyinteger(a) {
    let copyArr = [...a];
    for(let i=0;i<a.length;i++){
        let count=0;
        for(let j=0;j<copyArr.length;j++){
            if(a[i] == copyArr[j]){
                count++;
            }
            if(count >=2){
                a[i] = "";
            }
        }
    }
    a = a.filter((val) => {
        return val != "";
    })
    console.log(a);
    return a[0];
    

}
lonelyinteger([34,95,34,64,45,95,16,80,80,75,3,25,75,25,31,3,64,16,31]);

function diagonalDifference(arr) {
    let i=0;
    let leftDiagonalVal = 0;
    let rightDiagonal = 0;
    for(let i=0;i<arr.length;i++){
        leftDiagonalVal += arr[i][i];
    }
    for(let j=arr.length-1;j>=0;j--){
        rightDiagonal += arr[j][i];
        i++;
    }
    return Math.abs(leftDiagonalVal - rightDiagonal);
    // console.log(Math.abs(leftDiagonalVal - rightDiagonal));   
}
// let input2D = [
//     [1,2,3],
//     [4,5,6],
//     [9,8,9]
// ];
let input2D = [
    [-1,1,-7,-8],
    [-10,-8,-5,-2],
    [0,9,7,-1],
    [4,4,-2,1]
];
diagonalDifference(input2D);
// Day 8 If Else condition
function getGrade(score) {
    let grade;
    // Write your code here
    if(25 < score && score <= 30){
        grade = "A";
    }else if(20 < score && score <= 25){
        grade = "B";
    }else if(15 < score && score <= 20){
        grade = "C";
    }else if(10 < score && score <= 15){
        grade = "D";
    }else if(5< score && score <= 10){
        grade = "E";
    }else if(0<= score && score <=5){
        grade = "F"
    }
    return grade;
}
console.log(getGrade(11));

// Day 8 Switch case
function getLetter(s) {
    let letter;
    let set1 = new Set(["a","e","i","o","u"]);
    let set2 = new Set(["b","c","d","f","g"]);
    let set3 = new Set(["h","j","k","l","m"]);
    let set4 = new Set(["n","p","q","r","s","t","v","w","x","y","z"]);
    switch(true){
        case set1.has(s[0]):
            letter = "A";
            break;
        case set2.has(s[0]):
            letter = "B";
            break;
        case set3.has(s[0]):
            letter = "C";
            break;
        case set4.has(s[0]):
            letter = "D";
            break;
    }
    return letter;
}
console.log(getLetter("adfgt"));

function getCount(objects) {
    let count = 0;
    for(let i=0;i<objects.length;i++){
        console.log("objects =====>",objects[i])
        if(objects[i].x == objects[i].y){
            count++;
        }
    }
    console.log(count)
}
getCount([{x:0,y:0}]);

class Polygon {
    constructor(arr){
        this.arrOfInteger = arr;
    }
    perimeter(){
       return this.arrOfInteger.reduce((sum,n) => sum+n); 
    }
}


const rectangle = new Polygon([10, 20, 10, 20]);
const square = new Polygon([10, 10, 10, 10]);
const pentagon = new Polygon([10, 20, 30, 40, 43]);

console.log(rectangle.perimeter());
console.log(square.perimeter());
console.log(pentagon.perimeter());

// Template Literals

function sides(literals, ...expressions){
    console.log("literals =====>",literals);
    console.log("expressions ===============>",expressions);
}
sides `The area is: ${10 * 14}.\nThe perimeter is: ${2 * (10 + 14)}.`
// sides(`The area is: ${10 * 14}.\nThe perimeter is: ${2 * (10 + 14)}.`);

function countingSort(arr){
    let maxValue = Math.max(...arr);
    let zeroArr = [];
    for(let i=0;i<maxValue;i++){
        zeroArr.push(0)
    }
    console.log(zeroArr)
    for(let i=0;i<arr.length;i++){
        zeroArr[arr[i]] = zeroArr[arr[i]]+1;
    }
    console.log(zeroArr);
}

countingSort([1,1,3,2,98,4,0,0]);
// All test cases passed
// function countingSort(arr) {
//     // Write your code here
//     let maxValue = Math.max(...arr);
//     let zeroArr = [];
//     for(let i=0;i<100;i++){
//         zeroArr.push(0);
//     }
//     for(let i=0;i<arr.length;i++){
//         zeroArr[arr[i]] = zeroArr[arr[i]]+1;
//     }
//     return zeroArr;
// }

function towerBreakers(n, m) {
    // Write your code here

}
towerBreakers(2,6);

function caesarCipher(s, k) {
    let mainAlphabet = "abcdefghijklmnopqrstuvwxyz";
    let splitArr = mainAlphabet.split('');
    let resultStr = "";
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    let numbersArr = ["0","1","2","3","4","5","6","7","8","9"];
    let copyArr = [...splitArr];
    for(let i=0;i<k;i++){
        let initial = splitArr[0];
        for(let j=0;j<splitArr.length-1;j++){
            splitArr[j] = splitArr[j+1]
        }
        splitArr[splitArr.length - 1] = initial;
    }
    for(let k=0;k<s.length;k++){
        if(!specialChars.test(s[k]) && !numbersArr.includes(s[k])){
            let actualIndexVal = copyArr.indexOf(s[k].toLowerCase());
            if(s[k] == s[k].toUpperCase()){
                resultStr += splitArr[actualIndexVal].toLocaleUpperCase();
            }else{
                resultStr += splitArr[actualIndexVal];
            } 

        }else{
            resultStr += s[k];
        }
    }
    console.log(resultStr);
}
// All test cases passed
caesarCipher("middle-Outz",2);

// Iterate objects 

let myData = {
    name:"Venkateshwaran",
    age: 27,
    dept: "IT"
}

// For in function we need to for object
for(key in myData){
    console.log(myData[key])
}

const myfilterData = JSON.stringify(myData,["age","dept"]);
console.log(myfilterData);

const shape = {
    radius: 10,
    // When you call this normal function is reference to the shape object
    diameter: function () {
        return this.radius * 2
    },
    // When you call this arrow function is references to the window object
    perimeter: () => {
        return 2*Math.PI * this.radius;
    }
}

console.log(shape.diameter()); //20
console.log(shape.perimeter()); //NAN

// Object destructuring
let exampleObject = {
    name:"Karthika",
    age: 24,
    nativeDetail:{
        city:"Tenkasi",
        village: "Solaiseri"
    }
}

const name = "venkatesh";
// Rename the object fields
const {name: my_Name} = exampleObject;
console.log(my_Name);

// nested Destructuring
const {nativeDetail:{city,village}} = exampleObject;
console.log(city,village);

//Both are in different memory locations
console.log({a:1} == {a:1}); //false
console.log({a:1} === {a:1}); //false

function addAllNumbers(value){
    let reduceVal = value.reduce((sum,n) => parseInt(sum) + parseInt(n));
    if(reduceVal < 10){
        return reduceVal;
    }else{
       return addAllNumbers([...reduceVal.toString()])
    }
   
}

function repeatStringNumTimes(val,count){
    
    if(count > 1){
        return val + repeatStringNumTimes(val,count-1)
    }else{
        return val;
    }    
    
}

function superDigit(n, k) {
    let concatString = "";
    let reduceVal;
    let numArr =[];
    // Using while loop
    // while(k > 0){
    //     concatString += n;
    //     k--;
    // }
    // Recursive way
    // let repeatedString =  repeatStringNumTimes(n,k);
    // Using for loop
    for(let i=0;i<n.length;i++){
        let value = parseInt(n[i]) * k;
        numArr.push(value)  
        reduceVal = numArr.reduce((sum,n) => sum + n);
    }
    let finalResult = addAllNumbers([...reduceVal.toString()]);
    console.log(finalResult);
}
let inputNumStr1 = "7404954009694227446246375747227852213692570890717884174001587537145838723390362624487926131161112710589127423098959327020544003395792482625191721603328307774998124389641069884634086849138515079220750462317357487762780480576640689175346956135668451835480490089962406773267569650663927778867764315211280625033388271518264961090111547480467065229843613873499846390257375933040086863430523668050046930387013897062106309406874425001127890574986610018093859693455518413268914361859000614904461902442822577552997680098389183082654625098817411306985010658756762152160904278169491634807464356130877526392725432086439934006728914411061861235300979536190100734360684054557448454640750198466877185875290011114667186730452681943043971812380628117527172389889545776779555664826488520325234792648448625225364535053605515386730925070072896004645416713682004600636574389040662827182696337187610904694029221880801372864040345567230941110986028568372710970460116491983700312243090679537497139499778923997433720159174153"
superDigit(inputNumStr1,100000);
// superDigit("9875",4);

// Static key word example
// static = a method or property that belongs to a class and not any one object.
// Example 1
class Car {
    static numberOfCars = 0;
    constructor(model){
        this.model = model;
        Car.numberOfCars +=1;
    }

    static beginRace(){
        console.log("The race has begun!")
    }
}

let car1 = new Car("BWN");
let car2 = new Car("Toyota");
//console.log(car1.numberOfCars)// Out put is undefined beacuse of static keyword
console.log(Car.numberOfCars); // 2
Car.beginRace();
// car1.beginRace(); //It shows error beginRace is not a function

// Example 2
// let math1=new Math();
//console.log(math1.PI); //This is shows error
Math.PI;
Math.round();

// Water fall promises

function getData () {
    return new Promise((resolve,reject) => {
        fetch("https://jsonplaceholder.typicode.com/todos/1")
        .then((res) => res.json())
        .then((data) => {
            resolve(data);
        })
        .catch((error) => {
            reject(error);
        })
    }) 
}

function getData1 (val) {
    return new Promise((resolve,reject) => {
        fetch("https://jsonplaceholder.typicode.com/todos/1")
        .then((res) => res.json())
        .then((data) => {
            data.param1 = val+"Venkatesh";
            resolve(data);
        })
        .catch((error) => {
            reject(error);
        })
    }) 
}

function getData2 () {
    return new Promise((resolve,reject) => {
        fetch("https://jsonplaceholder.typicode.com/todos/1")
        .then((res) => res.json())
        .then((data) => {
            resolve(data);
        })
        .catch((error) => {
            reject(error);
        })
    }) 
}

function exampleWaterFallPromise(){
    getData()
    .then((data) => getData1(data.title))
    .then((data1) => getData2())
    .then((data2) => console.log(data2))
}

// exampleWaterFallPromise();

// SetTimeout Example

let my_obj = {
    name: "Venkatesh_Waran",
    getName: function (){
        return new Promise((resolve,reject) => {
            setTimeout(() => {
                resolve(this.name);
            })
        })
        
    }
}
// my_obj.getName().then((res) => console.log(res));


function _A(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve("Function _A is executed...")
        },1000)
    })
}

function _B(val){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve(val + "Function _B is executed...")
        },2000)
    })
}

function _C(val){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve(val + "Function _C is executed...")
        },3000)
    })
}

// function getAllTimeOutFunctionValues(){
//     _A()
//     .then((data) => _B(data))
//     .then((data1) => _C(data1))
//     .then((finalRes) => console.log(finalRes))
//     .catch((err) => console.log(err))
// }

function _A1(cb){
    setTimeout(() => {
        return cb("Function _A is executed...")
    },1000)
}
function _B1(cb){
    setTimeout(() => {
        return cb("Function _B is executed...");
    },2000)
}
function _C1(cb){
    setTimeout(() => {
        cb("Function _C is executed...")
    },3000)
}
// Using call back
function getAllTimeOutFunctionValues(){
    _A1((res) => {
        console.log("res ==========>",res);
    });
    _B1((res1) => {
        console.log("res1 ============>",res1);
    });
    _C1((res2) => {
        console.log("res2 ============>",res2);
    })
}
// getAllTimeOutFunctionValues();

let myRecursiveCount = 0;
let recursiveOverallArr=[];
function myRecursive(val){
    let myRecursiveresult = [];
    for(let i=0;i<val.length;i++){
        if(val[i][myRecursiveCount] != undefined ){
            myRecursiveresult.push(val[i][myRecursiveCount])
        }
    }
    if(myRecursiveresult.length > 0){
        recursiveOverallArr.push(myRecursiveresult)
    }
    
    if(myRecursiveCount <= val.length){
        myRecursiveCount++;
        myRecursive(val);
        return recursiveOverallArr;
    }
}

function gridChallenge(grid){
    let overAllArr = [];
    let coloumViceArr=[];
    for(let i=0;i<grid.length;i++){
        let sortedArr = grid[i].split("").sort();
        overAllArr.push(sortedArr);
    }
    myRecursiveCount = 0;
    recursiveOverallArr=[];
    coloumViceArr = myRecursive(overAllArr);
    for(let i=0;i<coloumViceArr.length;i++){
        if(coloumViceArr[i].toString() != coloumViceArr[i].sort().toString()){
            return "NO"
        }
    }
    return "YES";
}

let test1 = ["abc","lmp","qrt"];
let test2 = ["mpxz","abcd","wlmf"];
let test3 = ['abc','hjk',"mpq","rtv"];
console.log(gridChallenge(test1));
console.log(gridChallenge(test2));
console.log(gridChallenge(test3));
closureFn();

// Difference b/w Object.seal() and Object.freeze()

// Object.freeze(); We can't add new property and we can't change exitsing properties also.
let myObject = {
    name:"Venkateshwaran"
}
Object.freeze(myObject);
myObject["Age"]=27;
myObject.name = "Venki";
console.log(myObject);

// Object.seal(); we can't add new properties and we can change the exiting properties.
let mySealObject = {
    name:"karthi"
}
Object.seal(mySealObject);
mySealObject.name="Karthika V";
mySealObject["Age"] = 25;
console.log(mySealObject);

function exampleCurrying(a){
    return function(b){
        return function(){
            return a+b;
        }
        
    }
}

console.log(exampleCurrying(1)(2)());

// Deep copy
let exampleDeepCopy = {name:"venkatesh"};
let exampleDeepCopy1 = {...exampleDeepCopy};
exampleDeepCopy1.name = "karthi";
console.log(exampleDeepCopy);
console.log(exampleDeepCopy1);

// Shallow copy
let exampleShallowCopy = {name:"ShallowCopy"};
let exampleShallowCopy1 = exampleShallowCopy;
exampleShallowCopy1.name = "ShallowCopy1";
console.log(exampleShallowCopy);
console.log(exampleShallowCopy1);

// Leetcode
var removeDuplicates = function(nums) {
    let resultArr = [];
    let resultStr="";
    // for(let i=0;i<nums.length;i++){
    //     if(!resultArr.includes(nums[i])){
    //         resultArr.push(nums[i]);
    //     }else if(resultArr.includes(nums[i])){
    //         resultStr += nums[i];
    //     }
    // }
    let mySet = new Set([...nums]);
    console.log([...new Set([...nums])].length)
    console.log("resultArr ==========>",resultArr);
    
};

removeDuplicates([1,1,2]);
removeDuplicates([0,0,1,1,1,2,2,3,3,4]);

// Geeks for Geeks
// Print the Linked list elements
// Problem1
class Solution {
    display(head){
      //code here
      let resultStr = "";
      while(head != null){
          resultStr += head.data + " ";
          head = head.next;
      }
      console.log(resultStr)
    }
  }

// Real time example of currying
let nameLists=[
    {name:"Venki",age:25},
    {name:"karthi",age:23},
    {name:"demo",age:100}
];

// Remove demo object simpliest way
// const noDemoList = nameLists.filter((item) => item.name != "demo");
// console.log(noDemoList);
// Above code we can't reuse the code because name hardcoded
// const filterByName = (list,name) => {
//     return list.filter((item) => item.name != name);
// }
//May be If you are using filter method in one or more places means we need to use currying

// console.log(filterByName(nameLists,"demo"))

// Using Currying
const filtering = (name) => (item) => item.name != name; // This is currying
const filterByName = (list,name) => {
    return list.filter(filtering(name))
}
console.log(filterByName(nameLists,"demo"));

// Function hoisting
//displayName(); // It's not causing any issue,Is hositing successfully
// function displayName () {
//     console.log("venkateshwaran");
// }
// myNameFnExpression(); // Hositing is not working because it's function expression
// var myNameFnExpression = function () {
//     console.log("venkateshwaran");
// }
// arrowFunction(); // Hositing is not working because it's a arrow function 
// var arrowFunction = () => {
//     console.log("Venkateshwaran")
// }

let obj_ = {
    name:"venki",
    age: 27
}

console.log(Object.keys(obj_));
console.log(Object.values(obj_));
let objectEntries = Object.entries(obj_);
console.log(objectEntries.flat(1));

// Add Two numbers
var addTwoNumbers = function(L1, L2) {
    var carry = 0;
 var finalArr = [];
 for(let i=0;i<L1.length;i++){
   var val1 = L1[i] || 0;
   var val2 = L2[i] || 0;
   var result = val1+val2 + carry;
   if(result >= 10){
     carry = Math.floor(result/10);
     console.log(carry);
     result = result %10;
     finalArr.push(result)
   }else{ 
     finalArr.push(result)
   }
 }
 console.log(finalArr);
};

addTwoNumbers([9,9,9,9,9,9,9],[9,9,9,9]);
class Solution1 {
    //Function to insert a node at the beginning of the linked list.
    insertAtBegining(head, newData)
    {
        //your code here
        
        let n = new Node(newData);
        n.next=head;
        head = n;
        return head;
    }
    //Function to insert a node at the end of the linked list.
    insertAtEnd(head, newData)
    {
        //your code here
       
         let no = new Node(newData);
          if(!head)return no
       let prev=null;
        let n= head;
        while(n){
            prev=n;
            n=n.next;
        }
       
        prev.next=no;
        return head;
    }
}

// Merge two sorted lists
var mergeTwoLists = function(list1, list2) {
    let resultArr = [];
    // list2.splice(0,1);
    for(let i=0;i<list1.length;i++){
        for(let j=0;j<list2.length;j++){
            if(list1[i] == list2[j]){
                list1.splice(i,i+1,list2[j]);
                // list2.splice(i,j+1); 
            }
            // else if(list1[i] > list2[j]){
            //     list1.splice(i,i,list2[j]);
            // }
            // console.log("List1 =======>",list1[i]);
            // console.log(list2[j])
        }
    }
    console.log(list1);
    console.log(list2);
};
// mergeTwoLists([1,2,6],[1,2,8]);

// Create My Linked List
class Node {
    
}

let threePointArr = [];
function getThreeArr (arr,endPoint){
    let range = (arr.length/2 + endPoint)-1;
    let threePairArr = [];
     for(let j=endPoint;j<=range;j++){
            threePairArr.push(arr[j]);
        }
        threePointArr.push(threePairArr);
        if(endPoint <= 2){
            return getThreeArr(arr,endPoint+1)
        }
        // console.log("threePointArr ====>",threePointArr);
        return threePointArr;
}
// hacker rank problem
function hourglassSum(arr) {
    // Write your code here
    for(let i=0;i<arr.length;i++){
        threePointArr = [];
        let threePairArr = [];
        threePairArr =  getThreeArr(arr[i],0);
        console.log(threePairArr);
        
        threePointArr.push(threePairArr);
    }
    // console.log("threePointArr ====>",threePointArr);
}
let input6D = [
    [1,1,1,0,0,0],
    [0,1,0,0,0,0],
    [1,1,1,0,0,0],
    [0,0,2,4,4,0],
    [0,0,0,2,0,0],
    [0,0,1,2,4,0]
]
hourglassSum(input6D);