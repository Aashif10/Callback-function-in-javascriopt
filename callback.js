
//functional programming in javascript
// Callback function Here..
//1. There is first way to make callback function
/*
function add(a, b) {
    return a + b;
}
function sub(a,b){
    return a-b;

}
function mul(a,b){
    return a*b;

}
function devide(a,b){
    return a/b;
}
function calculator(c,d,task){
    return task (c,d)
}
let result=calculator(300,200,sub)
console.log(result);*/
 
// 2. This is second way maek call back function

function add(a,b){
    console.log(a+b);
}
function sub(a,b)
{
    console.log(a-b);
}
function mul(a,b){
    console.log(a*b);
}
function division(a,b){
    console.log(a/b);

}
function module(a,b){
    console.log(a%b);
}
// create Higher order function

function calculator(c,d,task){
    return task(c,d)
}
calculator(100,200,module)

