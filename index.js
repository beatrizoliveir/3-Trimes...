const { edGalho, edFolha } = require('./arrays');

function juntaListas(Lista1, Lista2){
    let listaFinal = [];
    let posicaoAtualLista1 = 0;
    let posicaoAtualLista2 = 0;
    let atual = 0;
    while (posicaoAtualLista1 < Lista1.length && posicaoAtualLista2 < Lista2.length) {
        let produtoAtualLista1 = Lista1[posicaoAtualLista1];
        let produtoAtualLista2 = Lista2[posicaoAtualLista2];

        if (produtoAtualLista1.preco < produtoAtualLista2.preco){

            listaFinal[atual] = produtoAtualLista1;

            posicaoAtualLista1++;

        }else{
            listaFinal[atual] = produtoAtualLista2;
            posicaoAtualLista2++;

        }
        atual++;
    }
    while (posicaoAtualLista1 < Lista1.length){
        listaFinal[atual] = Lista1[posicaoAtualLista1];
        posicaoAtualLista1++;
        atual++;
    }
    while(posicaoAtualLista2 < Lista2.length){
        listaFinal[atual] = Lista2[posicaoAtualLista2];
        posicaoAtualLista2++;
        atual++;
    }
    return listaFinal
    
}

console.log(juntaListas(edGalho,edFolha))