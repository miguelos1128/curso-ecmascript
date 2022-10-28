var lastName = 'David'; //declarar y asignar una variable
lastName = 'Oscar';//Reasignaar una variable
console.log(lastName);

let fruit = 'Apple';
fruit = 'Kiwi';
console.log(fruit);

const Animal = 'Perro';
Animal = 'Cat';
console.log(Animal);

const fruits = () => {
    if (true){
        var fruit1 = 'Apple';// function scope
        let fruit2 = 'Kiwi';// block scope
        const fruit3 = 'Banana'// block scope
    }
    console.log(fruit1);
    console.log(fruit2);
    console.log(fruit3);
}

fruits();