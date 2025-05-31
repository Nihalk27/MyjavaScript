let score = 33

console.log(typeof score )// this gives the type as number 

let score1 = "33"
// when we know the operation is on number then conversion is needed
console.log(typeof score1) // this gives as string 
let valueNumber = Number(score1)
console.log(typeof valueNumber) // this shows as a number 

let score2 = "33abc"
let newValue = Number (score2)
console.log(typeof newValue) // this give out put as number 
console.log(newValue) // output is NaN (Not-a-Number)

let a = null
console.log(a) // null as a output
let score3 = Number(a)
console.log(score3)// it gives 0 as a output

let b = undefined
console.log(b) 
let score4 = Number(b)
console.log(score4)  //NaN


let c = true
console.log(c) 
let score5 = Number(c)
console.log(score5) // 1 for true and 0 for false

// we have the String , Boolean conversion also 
let f = ""
let boolCheck = Boolean(f)
console.log(boolCheck) // empty string and 0 gives false , otherwise true

let stringcheck = String(c)
console.log(stringcheck)