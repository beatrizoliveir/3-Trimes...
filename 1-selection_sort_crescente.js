/**
 *Ordena um array em ordem crescente usando o algoritmo Selection Sort.
 *@param {number[]} arr - O array a ser ordenado.
 *@returns {number[]} - O array ordenado em ordem crescente.
 */

 function selectionSortAscending(arr) {
    let n = arr.length;
    // Loop para percorrer todos os elementos do array
    for (let i = 0; i < n - 1; i++){
        // Assume que o menor elemento está na posição i
        let minIndex = i;
        // Loop para encontrar o menor elemento no array não ordenado
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j; // atualiza o índice do menor elemento encontrado
            }
        }
        // Troca o menor elemento encontrado com o elemento na posição i
        if (minIndex !== i) {
            let temp = arr [i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }
    return arr;
 }
 // Exemplo de uso:
 let arrayAsc = [64, 25, 12, 22, 11];
 console.log("Array original:", arrayAsc);
 console.log("Array ordenado em ordem crescente:", selectionSortAscending(arrayAsc));