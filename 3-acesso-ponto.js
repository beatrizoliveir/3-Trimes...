const cliente = {
    nome: "Biah",
    idade: 18,
    cpf: "123456789",
    email: "biahlinda@dominio.com"
};

console.log(`o nome do cliente é ${cliente.nome} e essa pessoa tem ${cliente.idade} anos.`);
console.log(`Os 3 primeiros digitos do CPF são ${cliente.cpf.substring(0, 3)}`);
