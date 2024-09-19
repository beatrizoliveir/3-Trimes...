const cliente = {
    nome: "Biah",
    idade: 18,
    email:"biahlinda@gmail.com",
    telefone: ["123456789", "987654321"],
};
cliente.enderecos = [
    {
        rua: "R. Bia Linda",
        numero: 1234,
        apartamento: true,
        complemento: "ap 1234",
    },
];

const chavesDoObjeto = Object.keys(cliente);
console.log(chavesDoObjeto);

if (!chavesDoObjeto.includes("enderecos")) {
    console.error("Erro. É necessário ter um endereço cadastro.");
}