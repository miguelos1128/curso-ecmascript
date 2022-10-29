//manejo de fechas 4 caracteres de año, 2 mes y 2 dia
const regex = /(\d{4})-(\d{2})-(\d{2})/;
const matchers = regex.exec('2022-01-01');
console.table(matchers);