function formatacao(numero: string): string {
  const numeroLimpo = numero.replace(/\D/g, "");
  if (numeroLimpo.length === 11 || numeroLimpo.length === 14) {
    const formato =
      numeroLimpo.length === 11 ? "$1.$2.$3-$4" : "$1.$2.$3/$4-$5";
    return numeroLimpo.replace(/(\d{3})(\d{3})(\d{3})(\d{2})(\d{2})/, formato);
  } else {
    return "Inválido";
  }
}

console.log(formatacao("12345678501"));
console.log(formatacao("12345678901234"));
console.log(formatacao("123"));
