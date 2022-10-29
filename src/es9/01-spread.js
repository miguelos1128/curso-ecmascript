//transfomar de un objeto a un array
const user = { username:'gndx', age:34, country: 'MX'};
const { username, ...values} = user;
console.log(username);
console.log(values);
