const usuarios = [
    {nome: 'Bia', email: 'bia@example.com'},
    {nome: 'Duda', email: 'duda@example.com'},
    {nome: 'João', email: 'joão@example.com'},
    {nome: 'Mileni', email: 'mileni@example.com'}
];

const usuarioEncontrado = usuarios.find(usuario => usuario.nome === 'Bia');

console.log(usuarioEncontrado);