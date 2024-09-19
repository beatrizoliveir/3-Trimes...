const cliente = {
    nome: "Biah",
    idade: 18,
    email: "biahlinda@gmail.com",
    telefone: ["123456789", "987654321"],

};

cliente.enderecos = [
    {
        rua: "R. Bia Linda",
        numero: 1234,
        apartamento: true,
        complemento: "ap 123",
    },
];

function ligaParaCliente(telefoneComercial, telefoneResidencial) {
    console.log(`Ligando para ${telefoneComercial}`);
    console.log(`Ligando para ${telefoneResidencial}`);
}

ligaParaCliente(cliente.telefone[0], cliente.telefone[1]);
