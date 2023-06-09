//Q1----
function greeti() {
  console.log("Hello, world!");
}

greeti(); // Output: Hello, world!

//Q2-----
function printSum(a, b) {
  const sum = a + b;
  console.log(`Sum of ${a} and ${b} is ${sum}`);
}

printSum(3, 4); // Output: Sum of 3 and 4 is 7
  
//Q3----
const greet = () => {
  console.log("Hello, world!");
};

greet(); // Output: Hello, world!


//Q4---
var x=21;
var girl=function(x){
    console.log(x)
    var x=20;
}
girl();

//Q5----

// "Print output: 
var x = 21;
girl ();
console.log(x)
function girl() {
    console.log(x);
    var x = 20;
};


//Q6----
var x = 21;
a();
b();

  function a() {
    
   x = 20;
  console.log(x);
};
 function b() {
    
    x = 40;
   console.log(x);
};
console.log(x);

//Q7----
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  
  let result = 1;
  
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  
  return result;
}

///Day 2------
//Q1----
  
function FindSum(a, b){
  return a + b;
   }
  
   function DisplayData(data, batch){
  console.log(`i am from ${data} and My batch is EA${batch}`)
                }
  
  DisplayData("PrepBytes", FindSum(10, 9));

  //Q2----

  
  Abc();
  const Abc = function(){
      let value = 20;
      console.log(value);
  }

  //Q3-----

  var a = 10;
  (function (){
      console.log(a);
      var a = 20;
  })();

  //Q4---
   
  const greetu =  function(name){
    return function(m){
    
        console.log(`Hi!! ${name}, ${m}`);
    }
}
  
const greet_message = greetu('EA19');
greet_message("Welcome To PrepBytes")

