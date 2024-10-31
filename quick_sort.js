let array = [10, 7, 8, 9, 1, 5];

function quickSort(arr, inicio, fim) {
    if (inicio < fim) {
        // Encontra o índice de partição
        let indiceParticao = particionar(arr, inicio, fim);

        //Ordena os elementos antes e depois da partição
        quickSort(arr, inicio, indiceParticao - 1); // Lado esquerdo
        quickSort(arr, indiceParticao + 1, fim); // Lado direito
    }
}

// Função para particionar o array
function particionar(arr, inicio, fim) {
    let pivo = arr[fim]; // Escolhe o último elemento como pivô
    let i = inicio - 1; // Índice do menor elemento 
    for (let j = inicio; j < fim; j++){
        if (arr[j] < pivo) {
            i++; // Incrementa o índice do menor elemento
        [arr[i], arr[j]] = [arr[j], arr[i]]; // Troca elementos
        }
    }
    // Coloca o pivô na posição correta
    [arr[i + 1], arr[fim]] = [arr[fim], arr[i + 1]];
    return i + 1; // Retorna o índice do pivô
}

// Testando o algoritmo

console.log("Array original:", array);

quickSort(array, 0, array.length - 1); // Chamada inicial do Quick Sort 
  console.log("Array ordenado:", array);
