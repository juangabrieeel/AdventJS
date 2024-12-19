function fixPackages(packages) {
  const stack = [];

  for (let char of packages) {
    if (char === ")") {
      let temp = [];
      while (stack.length && stack[stack.length - 1] !== "(") {
        temp.push(stack.pop()); // Volteamos el contenido
      }
      stack.pop(); // Quitamos el '(' correspondiente
      temp.forEach((c) => stack.push(c)); // Añadimos el contenido volteado al stack
    } else {
      stack.push(char); // Agregamos caracteres al stack
    }
  }

  return stack.join("");
}

// Ejemplos de prueba
console.log(fixPackages("a(cb)de")); // ➞ "abcde"
console.log(fixPackages("a(bc(def)g)h")); // ➞ "agdefcbh"
console.log(fixPackages("abc(def(gh)i)jk")); // ➞ "abcighfedjk"
console.log(fixPackages("a(b(c))e")); // ➞ "acbe"
