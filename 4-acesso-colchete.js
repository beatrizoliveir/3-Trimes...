const cliente = {
    nome: "Biah",
    idade: 18,
    cpf: "123456789",
    email: "biahlinda@gmail.com"
};
console.log(
    `O nome do cliente é ${cliente["nome"]} e essa pessoa tem ${cliente["idade"]} anos.`

);
const chaves = ["nome", "idade", "cpf", "email"];
chaves.forEach((chave) => {
    console.log(`A chave ${chave} tem valor ${cliente[chave]}`);
});
