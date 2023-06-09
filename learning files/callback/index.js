//callback es una función que pasa como argumento de otra función :D
function sum(num1,num2){
    return num1 + num2;
}

function calc(num1,num2,callback){
    return callback(num1,num2);
}

console.log(calc(7,2,sum))

setTimeout(function(){
    console.log("Holis")
},2000) //set timeojut ya es un callback en si mismo(?)

function greetings(name){
    console.log(`Hola ${name}`)
}

setTimeout(greetings, 3000,"panda xd");