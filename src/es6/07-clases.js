//Declarando
class User {}
//Haciendo una isntancia
//const newUser = new User();

class user{
    //metodos
    greeting(){
       return 'Hello Wolrd';
    }
};

const mike = new user();
console.log(mike.greeting());
const bebeloper = new user();
console.log(bebeloper.greeting());

//constructor

class user {
    //constructor
    constructor(){
        console.log('Nuevo usuario');
    }
    greeting(){
        return 'Hello Wolrd';
    }
}

const david = new user();

//this  -> Hace referencia a lo que tiene su padre

class user {
    constructor(name){
        this.name = name;
    }
    //metodos
    speak() {
        return 'Hello';
    }
    greeting(){
        return `${this.speak()} ${this.name}`;
    }
}

const ana = new user('Ana');
console.log(ana.greeting());

//setters and getters

class user {
    //cosntructor
    constructor (name, age){
        this.name = name;
        this.age = age;    
    }
    //metodos
    speak(){
        return 'Hello';
    }
    greeting(){
        return `${this.speak()} ${this.name}`;       
    }

    get uAge(){
        return this.age;
    }
    set uAge(n){
        this.age = n;
    }
}

const bebeloper1 = new user('David', 15);
console.log(bebeloper1.uAge);
console.log(bebeloper1.uAge = 20);