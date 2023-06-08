function* gen(){
    yield 1;
    yield 2;
}

const g = gen();
console.log(g.next())
console.log(g.next())
console.log(g.next())


function* iterable(array){
    for (let value of array){
        yield value
    }
}

let arr = ["q","aw","lo","xd","eeeee"]
const it = iterable(arr)
for (let index = 0; index <= arr.length; index++) {
    console.log(it.next());
    
}