const promise = new Promise((res,rej)=>{
    res("holo xd");
})

const cows = -1000;

const promesa = new Promise((resolve,reject)=>{
    if (cows>10){
        resolve(`Vacas necesarias uwu (${cows})`)
    }
    else {
        reject("Tienes vacas negativas xd")
    }
})

promesa.then((result)=>{
    console.log(result)
}).catch((error)=>{console.error(error)
}).finally(()=>console.log("temrinao"))