async function* anotherGenerator() {
    yield Promise.resolve(1);
    yield Promise.resolve(2);
    yield Promise.resolve(3);
}

const other = anotherGenerator();
other.next().then(Response => console.log(Response.value));
other.next().then(Response => console.log(Response.value));
other.next().then(Response => console.log(Response.value));
console.log('Hello');

async function arrayOfNames(array) {
    for await (let value of array){
        console.log(value);
    }
}

const names = arrayOfNames(['OScar', 'David', 'Ana']);
console.log('After');