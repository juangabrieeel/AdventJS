// Codigo con la función
function inBox(box) {
  // Iterar sobre cada fila excepto la primera y la última (bordes)
  for (let i = 1; i < box.length - 1; i++) {
    const row = box[i];
    // Comprobar si el '*' está dentro de los bordes '#'
    if (
      row.includes("*") &&
      row.indexOf("*") > 0 &&
      row.indexOf("*") < row.length - 1
    ) {
      return true;
    }
  }
  return false;
}

// Ejemplos de prueba
console.log(inBox(["###", "#*#", "###"])); // ➞ true

console.log(inBox(["####", "#* #", "#  #", "####"])); // ➞ true

console.log(inBox(["#####", "#   #", "#  #*", "#####"])); // ➞ false

console.log(inBox(["#####", "#   #", "#   #", "#   #", "#####"])); // ➞ false
