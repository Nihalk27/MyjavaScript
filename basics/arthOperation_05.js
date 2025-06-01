console.log(2+2)
console.log(2-2)
console.log(2*2)
console.log(2/2)
console.log(2%2)
console.log(2**3) // it means 2 power 3 

let str1 = "Nihal"
let str2 = "Kondukwar"
 
let str3 = str1 + str2 

console.log(str3)

// WHEN WE TRY TO ADD A NUMBER AND STRING

console.log("1" + 2) //12
console.log(1 + "2") //12
console.log("1" + 2 + 2 ) //122
console.log(1 + 2 + "2" ) //32 it happens due to topreimive (input , type )
console.log("Nihal" + 2 + 2 ) //Nihal22
console.log( 2 + 2 + "Nihal") //4Nihal
console.log(+true)//1 but true+ give error
console.log(+"")// 0 as output

let num1, num2, num3
num1 = num2 = num3 = 2+2 // is allowed 

console.log("Comparision starts here")
// for comparing data type should be same for predictable output

console.log("2" > 1) //true
console.log("02" > 1) //true

// unpredictable output it happens due to null converts to NaN or 0 which is unpredictable
console.log(null > 0) // false
console.log(null == 0) // false
console.log(null >= 0) // true 
console.log(null === 0) // false  it is strict check it will not make the conversion data type 

//undefined give false 