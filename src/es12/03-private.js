//setters and getters

class user {
    //cosntructor
    constructor (name, age){
        this.name = name;
        this.age = age;    
    }
    //metodos
    #speak(){//privado
        return 'Hello';
    }
    greeting(){
        return `${this.speak()} ${this.name}`;       
    }

    get #uAge(){//privado
        return this.age;
    }
    set #uAge(n){//privado
        this.age = n;
    }
}

const bebeloper1 = new user('David', 15);
console.log(bebeloper1.uAge);
console.log(bebeloper1.uAge = 20);