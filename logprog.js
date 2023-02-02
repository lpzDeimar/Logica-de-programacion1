let contador;
const NUMBER = [];

function getNumber() {
  for (contador = 0; contador < 3; contador++) {
    NUMBER.push(prompt("escriba un numero"));
  }
  console.log(NUMBER);
}

function compareNumber() {
  if (NUMBER[0] === NUMBER[1] && NUMBER[2] && NUMBER[1] === NUMBER[2]) {
    document.write(`sus numeros ${NUMBER} : Son iguales`);
  } else {
    document.write(
      `Orden asendente de sus numeros: ${NUMBERO.sort((a, b) => a - b)}`
    );
    document.write(
      `Orden asendente de sus numeros: ${NUMBERO.sort((a, b) => a - b)}`
    );
  }
}

getNumber();
compareNumber();
//T.T aun no funciona pero lo hara pronto ten me fe//
