//array test
var ar=['sss','sd','xxx']

var x=[...ar,'wk']

console.log(x)

y=x.concat('new1','ddd')

console.log( x)
console.log(y)

var y2=x.slice(3)

console.log(x)
console.log( y2)

var str=x.join(',')
console.log(str)

//date test

var d = new Date("2015-03-25T12:00:00+08:00")
console.log(d)

var d2= new Date()
var s=d2.toJSON()
console.log(d2.getTimezoneOffset())