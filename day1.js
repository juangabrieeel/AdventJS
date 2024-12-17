// Función encargada
function prepareGifts(gifts) {
  // Con Set nos encargamos de eliminar los objetos repetidos en el array
  const uniqueGifts = new Set(gifts);
  // Devolvemos un nuevo array ordenado alfabeticamente
  return [...uniqueGifts].sort((a, b) => a - b);
}

// Codigo con pruebas
const gifts1 = [3, 1, 2, 3, 4, 2, 5];
const preparedGifts1 = prepareGifts(gifts1);
console.log(preparedGifts1); // [1, 2, 3, 4, 5]

const gifts2 = [6, 5, 5, 5, 5];
const preparedGifts2 = prepareGifts(gifts2);
console.log(preparedGifts2); // [5, 6]

const gifts3 = [];
const preparedGifts3 = prepareGifts(gifts3);
console.log(preparedGifts3); // []
