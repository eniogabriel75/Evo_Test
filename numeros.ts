function temDigito8ENaoTemDigito3(numero: number): boolean {
  const strNumero = numero.toString();
  return strNumero.includes("8") && !strNumero.includes("3");
}

function imprimirNumerosComRestricao(inicio: number, fim: number): number {
  let contador = 0;

  for (let i = inicio; i <= fim; i++) {
    if (temDigito8ENaoTemDigito3(i)) {
      console.log(i);
      contador++;
    }
  }

  return contador;
}

const inicio = 18907;
const fim = 33306;

console.log(
  `Números entre ${inicio} e ${fim} com o dígito 8 e sem o dígito 3:`
);
const totalEncontrado = imprimirNumerosComRestricao(inicio, fim);
console.log(`Total de números encontrados: ${totalEncontrado}`);
