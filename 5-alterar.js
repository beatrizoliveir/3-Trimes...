const pessoa = {
    nome: "Biah",
    profissao: "Engenharia",
};

console.log(pessoa.nome);
console.log(pessoa.telefone);//undefined - 
pessoa.telefone = "11 123456789"; // inclusão telefone
console.log(pessoa.telefone);
pessoa.nome = "Biah Linda"; // alteração nome
console.log(pessoa);
const novaPessoa = {
    nome: "Beatriz",
};
// pessoa = novaPessoa;
