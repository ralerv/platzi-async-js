const fnAsync = () =>{
    return new Promise((res,rej)=>{
        (true)
        ? setTimeout(()=>res("Async!"),2000)
        : rej(new Error("Error pipipipi"))
    })
}

const anotherFn = async () =>{
    console.log("Procesando uwu")
    const something = await fnAsync()
    console.log(something)
}

console.log("Ante");
anotherFn()
console.log("Final")