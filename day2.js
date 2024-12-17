// Función encargada
function createFrame(names) {
  // Encuentra la longitud del nombre más largo
  const maxLength = Math.max(...names.map((name) => name.length));

  // Define la anchura del marco
  const frameWidth = maxLength + 4; // 2 espacios para márgenes + 2 bordes de *

  // Genera la línea superior e inferior del marco
  const border = "*".repeat(frameWidth);

  // Genera el contenido del marco
  const framedNames = names.map((name) => `* ${name.padEnd(maxLength, " ")} *`);

  // Combina todo
  return [border, ...framedNames, border].join("\n");
}

// Codigo con pruebas
console.log(createFrame(["midu", "madeval", "educalvolpz"]));
// Resultado esperado:
//***************
//* midu        *
//* madeval     *
//* educalvolpz *
//***************
console.log(createFrame(["a", "bb", "ccc", "dddd"]));
