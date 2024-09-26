// Imagine que temos um array de objetos representado
// pessoas e queremos encontar a pessoa com um nome específico.

const people = [
    {name: 'Bia', age: 18},
    {name: 'Biah', age: 20},
    {name: 'Bia Linda', age: 22}
];

// Encontrar a pessoa com o nome 'Biah'

const person = people.find(person => person.name === 'Biah');

console.log(person); // { name: 'Biah', age: 20}