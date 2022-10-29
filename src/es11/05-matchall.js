//Permite la filtracion de palabras en un string
const regex = /\b(Apple)+\b/g;

const fruit = 'Apple, Banna, Kiwi, Appel, orange. etc. etc.';

for(const match of fruit.matchAll(regex)){
    console.log(match);
}