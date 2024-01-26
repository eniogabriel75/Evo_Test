function validarSenha(senha: string): boolean {
  const possuiMaiuscula = /[A-Z]/.test(senha);
  const possuiMinuscula = /[a-z]/.test(senha);
  const possuiDigito = /\d/.test(senha);
  const possuiCaractereEspecial = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(
    senha
  );

  return (
    possuiMaiuscula &&
    possuiMinuscula &&
    possuiDigito &&
    possuiCaractereEspecial
  );
}
const senhaExemplo = "Senha123!";
const senhaValida = validarSenha(senhaExemplo);

console.log(`A senha "${senhaExemplo}" é válida? ${senhaValida}`);
