function buscaBinaria(lista, elementoProcurado){
    let inicio = 0;
    let fim = lista.length - 1;
    while (inicio <= fim) {
        let meio = Math.floor((inicio + fim) /2);
        if (lista[meio] === elementoProcurado) {
            return meio; // retorna a posição do elemento encontrado
        } else if(lista[meio] < elementoProcurado) {
            inicio =  meio + 1; // Procura na metade superior da lista 
        } else{
            fim = meio -1; // Procura na metade inferior da lista
        }
    }
    return -1; // Retorna -1 se o elemento não for encontrado
}
// Exemplo de uso

const listaOrdenada = [1, 3, 5, 7, 9, 11];
const elemento = 7;
const resultado = buscaBinaria(listaOrdenada, elemento);
if (resultado !== -1) {
    console.log(`Elemento encontrado na posição ${resultado}.`);

} else {
    console.log("Elemento não encontrado.");
}