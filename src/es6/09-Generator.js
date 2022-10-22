function* iterate(array){
    for (let value of array){//por cada elelment del array aremos algo
        yield value;
    }
}

const it = iterate(['Oscar', 'Mike', 'Ana', 'David', 'Ulises', 'Jennifer']);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);   
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);