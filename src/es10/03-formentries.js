//Sirve paara la manipulación de objetos transforma en array
const entries = new Map([["name", "oscar"], ["age", "34"]]);
console.log(entries);

console.log(Object.fromEntries(entries));