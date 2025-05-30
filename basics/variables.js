const pincode = 442603
// pincode is saved in memory , and any changes in it are not allowed ex. pincode = 112200 and so on ,... where as the below variables are allowed to change 
let emailId = "nihal@gmail.com"
/*
Prefer not to use the var , because of issue in block scope and functional scope
*/
var nameId = "Nihal"
//we can reserve a memory for a variable without any specification as below but it is not a good practice
city = "Nagpur"
//initialise but not declared , it gives the undefined value
let houseNo 
 // to print we can use console.log()
 console.log(pincode)
 // another way to print all data at a time we use console.table
 console.table([pincode, emailId, nameId, city, houseNo])