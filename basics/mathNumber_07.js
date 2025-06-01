const score = 400
console.log(score)

const newnum = new Number(100)
console.log(newnum)//type and valur

console.log(newnum.toString)

console.log(newnum.toFixed(1))

const anothernum = 23.123445
console.log(anothernum.toPrecision(3))

const num1 = 1000000

console.log(num1.toLocaleString('en-IN')) //gives commas according to ind standard by default we dont write anythhing it will consider the USA standard

//Number.MAX_VALUE , Number.MIN_VALUE,MAX_SAFE_INTEGER,isFinite,isInteger and so on


//math library comes as default with javaScript

console.log(Math)
console.log(Math.abs(-4))
console.log(Math.round(2.34))
console.log(Math.ceil(2.334))
console.log(Math.floor(4.232))
console.log(Math.min(2,4,1,123,42,12,4))
console.log(Math.max(2,4,1,123,42,12,4))
console.log(Math.random()) // gives value between 0 to 1 

//formula to get a range 

const min = 10 
const max = 20

console.log(Math.floor(Math.random()*(max - min +1 )) + min)

