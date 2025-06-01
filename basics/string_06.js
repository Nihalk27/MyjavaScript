const name = "Nihal"
const repoCount = 50

// old ways are console.log( name + repoCount)
console.log(`Hello my name is ${name} and my repo count is ${repoCount} `)

const positionToFind = new String('   Kondukwar')
console.log(positionToFind.charAt(3)) // space are consider as char while finding index
console.log(positionToFind.indexOf('u'))

const newString = positionToFind.substring(3, 7) 
// the value at the last index gets excluded
//it will also not consider the negative values and starts from xero 
console.log(newString)

const anotherString = positionToFind.slice( 5 , -2) 
//  it take neagtive values means it consider the position from back
// slice(indexStart)
// slice(indexStart, indexEnd)

console.log(anotherString)
console.log(positionToFind.length)

console.log(positionToFind.trim())

const url = "http://nihal.com/hiude"
console.log(url)
const newUrl = url.replace('nihal', 'Kondukwar') 
console.log(newUrl)
console.log(url.includes('kon'))

const newstr = "Hello welcome to the js programming"
console.log(newstr.split(" " ,3)) //split (by which , upto to)