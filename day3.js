// Codigo con la función
function organizeInventory(inventory) {
  const organized = {};

  inventory.forEach(({ name, quantity, category }) => {
    // Si la categoría no existe, inicialízala como un objeto vacío
    if (!organized[category]) {
      organized[category] = {};
    }

    // Si el juguete ya existe en la categoría, suma la cantidad; si no, inicialízalo
    if (organized[category][name]) {
      organized[category][name] += quantity;
    } else {
      organized[category][name] = quantity;
    }
  });

  return organized;
}

// Codigo de pruebas
const inventory = [
  { name: "doll", quantity: 5, category: "toys" },
  { name: "car", quantity: 3, category: "toys" },
  { name: "ball", quantity: 2, category: "sports" },
  { name: "car", quantity: 2, category: "toys" },
  { name: "racket", quantity: 4, category: "sports" },
];

organizeInventory(inventory);

// Resultado esperado:
// {
//   toys: {
//     doll: 5,
//     car: 5
//   },
//   sports: {
//     ball: 2,
//     racket: 4
//   }

const inventory2 = [
  { name: "book", quantity: 10, category: "education" },
  { name: "book", quantity: 5, category: "education" },
  { name: "paint", quantity: 3, category: "art" },
];

console.log(organizeInventory(inventory2));

// Resultado esperado:
// {
//   education: {
//     book: 15
//   },
//   art: {
//     paint: 3
//   }
// }
