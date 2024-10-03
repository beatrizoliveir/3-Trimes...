/**
 * Ordena um array em ordem decrescente usando o algoritmo Selection Sort.
 * @param {number[]} arr - O array a ser ordenado.
 * @returns {number[]} - O array ordenado em ordem decrescente.
 */

function selectionSortDescending(arr){
    let n = arr.length;

    // Loop para percorrer todos os elementos do array
    for (let i = 0; i < n - 1; i++){
        // assume que o maior elemento está na posição i
        let maxIndex = i;

        //Loop para encontrar o maior elemento no array não ordenado
        for (let j = i + 1; j < n; j++){
            if (arr[j] > arr[maxIndex]){
                maxIndex = j; // Atualiza o índice do maior elemento encontrado
            }
        }
        // troca o maior elemento encontrado com o elemento na posição i
        if (maxIndex !== i){
            let temp = arr[i];
            arr[i] = arr[maxIndex];
            arr[maxIndex] = temp;
        }
    }
    return arr;
}
// exemplo de uso:
let arrayDesc = [64, 25, 12, 22, 11];
console.log("Array original:", arrayDesc);
console.log("Array ordenado em ordem decrescente:", selectionSortDescending(arrayDesc));