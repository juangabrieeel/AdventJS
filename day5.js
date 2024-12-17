// Codigo con la función
function organizeShoes(shoes) {
    var pairs = [];
    var shoeMap = {};
    // Contar las botas por tamaño y tipo
    shoes.forEach(function (_a) {
        var type = _a.type, size = _a.size;
        if (!shoeMap[size]) {
            shoeMap[size] = { I: 0, R: 0 };
        }
        shoeMap[size][type]++;
    });
    // Encontrar pares y agregarlos al resultado
    for (var size in shoeMap) {
        var _a = shoeMap[size], I = _a.I, R = _a.R;
        var pairCount = Math.min(I, R);
        for (var i = 0; i < pairCount; i++) {
            pairs.push(Number(size));
        }
    }
    return pairs;
}
// Ejemplos de pruebaç
var shoes1 = [
    { type: "I", size: 38 },
    { type: "R", size: 38 },
    { type: "R", size: 42 },
    { type: "I", size: 41 },
    { type: "I", size: 42 },
];
console.log(organizeShoes(shoes1)); // [38, 42]
var shoes2 = [
    { type: "I", size: 38 },
    { type: "R", size: 38 },
    { type: "I", size: 38 },
    { type: "I", size: 38 },
    { type: "R", size: 38 },
];
console.log(organizeShoes(shoes2)); // [38, 38]
var shoes3 = [
    { type: "I", size: 38 },
    { type: "R", size: 36 },
    { type: "R", size: 42 },
    { type: "I", size: 41 },
    { type: "I", size: 43 },
];
console.log(organizeShoes(shoes3)); // []
