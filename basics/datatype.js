"use strict" //treat all js code as newer version where as new version treat all as a use strict
//JavaScript is a dynamically typed language. This means that variable types are determined at runtime, and you don't need to declare a variable's type explicitly.
//alert () is used in browser not in nodejs 

//we can use the ; as well when writting multiple statement in a single line
 console.log("hello");console.log("World") //not a good practice

 let name = "Nihal" //string data type
 let age = 25 //int data type
 let isLoggedIn = false // boolean 

 /*
 type    => range

 primitive data types 
 These types are typically built into the language and are used to represent simple values and changes are made on their copies
 Number => 2 to power 53
 bigint => 2n ('n' is there at the end it represent the bigint)
 boolean => larger value than int
 string => ' ' or ""
 null => standalone value , it has significance as empty but it is not similar to the undefined 
 undefined => not declared but also not null 
 symbol =>
 Symbols are unique and immutable identifiers, primarily used as keys for object properties to avoid name collisions and to create hidden or non-enumerable properties ,mostly used in react  

 reference (NON primitive) return type all are all called as function
Array=> [ e1,e2,e3]
object => let myobj = { key : value , ...so on } alway in key value pair 
function => we can treat as a variable 

*/
console.log(typeof "Nihal")
console.log(typeof null) // it give as 'Object'
console.log(typeof undefined) // where as it is undefined
console.log(typeof 23 )

const id = Symbol('123')
const anotherid = Symbol('123')
console.log(id === anotherid) // false 

const myFunction = function(){
    console.log("My first Function");
}
myFunction();
console.log(typeof myFunction)

const arrayCheck = ['hello' , 'hi']
console.log(arrayCheck)
console.log(typeof arrayCheck) //it is object function internally
