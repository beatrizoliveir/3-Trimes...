const listaLivros = require("./array.js");
function mergeSort(array){
    if (array.length > 1){
        const meio = Math.floor(array.length / 2);
        const part1 = mergeSort(array.slice(0,meio));
        const part2 = mergeSort(array.slice(meio));
        array = ordena(part1, part2);
    }
    return array;
}

function ordena(part1, part2) {
    let posicaoAtualPart1 = 0;
    let posicaoAtualPart2 = 0;
    const resultado = [];
    while (
        posicaoAtualPart1 < part1.length &&
        posicaoAtualPart2 < part2.length
    ){
        const produtoAtualPart1 = part1[posicaoAtualPart1];
        const produtoAtualPart2 = part2[posicaoAtualPart2];

        if (produtoAtualPart1.preco < produtoAtualPart2.preco){
            resultado.push(produtoAtualPart1);
            posicaoAtualPart1++ // Incrementa o índice corretamente
        } else {
                resultado.push(produtoAtualPart2);
                posicaoAtualPart2++; // Incrementa o índice corretamente
        }
    }
    // Adiciona os elementos restantes, se houver
    return resultado.concat(
        posicaoAtualPart1 < part1.length
        ? part1.slice(posicaoAtualPart1)
        : part2.slice(posicaoAtualPart2)
    );
}

  console.log(mergeSort(listaLivros));