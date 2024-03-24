(() => {

  /* Excercises */

  /* First excercise */
  
  let numbers = [1, 2, 3, 4, 5];
  
  let multiplie = numbers.map(number => number * 5);

  console.log(multiplie);

  /* First excercise */

  /* Second excercise */

  let names = ["Jhosep", "Daniel", "Rodrigo", "Veronica"];

  names.sort();

  console.log(names);

  /* Second excercise */

  /* Thrid excercise */

  const data = ['a', 'b', 'z', 'r', 'a', 'c', 'r', 'a'];

  function eliminarRepetidas(arr) {
      return arr.filter((value, index, self) => self.indexOf(value) === index);
  }
  const sinRepetidas = eliminarRepetidas(data);

  console.log(sinRepetidas);

  /* Thrid excercise */

  /* Fourth excercise */

  const largeWord = "abcdabcdABCD";

function contarRepeticiones(str) {
    let letras = {};

    for (let letra of str) {
        if (letras[letra]) {
            letras[letra]++;
        } else {
            letras[letra] = 1;
        }
    }

    for (let letra in letras) {
        console.log(` ${letra} : ${letras[letra]} ,`);
    }
}
contarRepeticiones(largeWord);

  /* Fourth excercise */

})();
