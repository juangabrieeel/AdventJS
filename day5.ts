interface Shoe {
  type: "I" | "R";
  size: number;
}
// Codigo con la función
function organizeShoes(shoes: Shoe[]): number[] {
  const pairs: number[] = [];
  const shoeMap: Record<number, { I: number, R: number }> = {};

  // Contar las botas por tamaño y tipo
  shoes.forEach(({ type, size }) => {
    if (!shoeMap[size]) {
      shoeMap[size] = { I: 0, R: 0 };
    }
    shoeMap[size][type]++;
  });

  // Encontrar pares y agregarlos al resultado
  for (const size in shoeMap) {
    const { I, R } = shoeMap[size];
    const pairCount = Math.min(I, R);
    for (let i = 0; i < pairCount; i++) {
      pairs.push(Number(size));
    }
  }

  return pairs;
}
// Ejemplos de pruebaç
const shoes1: Shoe[] = [
  { type: "I", size: 38 },
  { type: "R", size: 38 },
  { type: "R", size: 42 },
  { type: "I", size: 41 },
  { type: "I", size: 42 },
];
console.log(organizeShoes(shoes1)); // [38, 42]

const shoes2: Shoe[] = [
  { type: "I", size: 38 },
  { type: "R", size: 38 },
  { type: "I", size: 38 },
  { type: "I", size: 38 },
  { type: "R", size: 38 },
];
console.log(organizeShoes(shoes2)); // [38, 38]

const shoes3: Shoe[] = [
  { type: "I", size: 38 },
  { type: "R", size: 36 },
  { type: "R", size: 42 },
  { type: "I", size: 41 },
  { type: "I", size: 43 },
];
console.log(organizeShoes(shoes3)); // []
