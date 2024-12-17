// Codigo con la función
function createXmasTree(height, ornament) {
  let tree = "";

  // Construir la parte superior del árbol
  for (let i = 0; i < height; i++) {
    const spaces = "_".repeat(height - i - 1); // Espacios a los lados
    const ornaments = ornament.repeat(2 * i + 1); // Carácter decorativo
    tree += spaces + ornaments + spaces + "\n";
  }

  // Construir el tronco
  const trunk = "_".repeat(height - 1) + "#" + "_".repeat(height - 1);
  tree += trunk + "\n" + trunk;

  return tree;
}

// Ejemplos de prueba
const tree1 = createXmasTree(5, "*");
console.log(tree1);
/*
  ____*____
  ___***___
  __*****__
  _*******_
  *********
  ____#____
  ____#____
  */

const tree2 = createXmasTree(3, "+");
console.log(tree2);
/*
  __+__
  _+++_
  +++++
  __#__
  __#__
  */

const tree3 = createXmasTree(6, "@");
console.log(tree3);
/*
  _____@_____
  ____@@@____
  ___@@@@@___
  __@@@@@@@__
  _@@@@@@@@@_
  @@@@@@@@@@@
  _____#_____
  _____#_____
  */
