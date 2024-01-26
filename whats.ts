const listaContatos: string[] = [
  "5584918085085687@g.us",
  "558499135571134@whatsapp.net",
  "5584923212265904@whatsapp.net",
  "5584952959035621@whatsapp.net",
  "5584949416765992@whatsapp.net",
  "5584926996221898@whatsapp.net",
  "5584927366063291@whatsapp.net",
  "5584955931623591@g.us",
  "5584941643882023@whatsapp.net",
  "5584910003711395@whatsapp.net",
  "4984941894072067@whatsapp.net",
  "5584970490346534@whatsapp.net",
  "5584945802256141@whatsapp.net",
  "5584968359291398@whatsapp.net",
  "5584968606997955@whatsapp.net",
  "5584926729203532@whatsapp.net",
  "5584916899447391@whatsapp.net",
  "5584944917440950@whatsapp.net",
  "5584959409895792@whatsapp.net",
  "5584946193744057@whatsapp.net",
  "5584988097752593@whatsapp.net",
  "5584999969677679@whatsapp.net",
  "5584948653641949@whatsapp.net",
  "5584920049333412@whatsapp.net",
  "5584946554505496@whatsapp.net",
  "5584952055285364@whatsapp.net",
  "5584927385196235@whatsapp.net",
  "5584974102123808@whatsapp.net",
  "5584955359093482@whatsapp.net",
  "5584974132773500@whatsapp.net",
  "5584915630393916@whatsapp.net",
  "5584969685448182@whatsapp.net",
  "5584964164913152@whatsapp.net",
  "558492229420168@whatsapp.net",
  "558493093788989@whatsapp.net",
  "5584928655839404@whatsapp.net",
  "558491281044876@whatsapp.net",
  "5584919716243760@whatsapp.net",
  "5584955678060911@whatsapp.net",
  "558494237105834@whatsapp.net",
  "5584952111991749@g.us",
  "5584955348899721@whatsapp.net",
  "5584961965524266@whatsapp.net",
  "5584921666547650@whatsapp.net",
  "5584953324123229@whatsapp.net",
  "4984954571184315@whatsapp.net",
  "5584928605832196@whatsapp.net",
  "5584913407077701@whatsapp.net",
  "5584983782791301@whatsapp.net",
  "498491336128919@whatsapp.net",
  "5584929382720727@g.us",
  "5584932963421152@whatsapp.net",
  "5584973590293822@g.us",
  "5584923531614049@whatsapp.net",
  "5584994812227845@whatsapp.net",
  "5584918726746212@g.us",
  "5584994259125568@whatsapp.net",
  "5584973500945422@whatsapp.net",
  "5584925369157531@whatsapp.net",
  "5584995149436624@g.us",
  "5584985061719259@whatsapp.net",
  "5584913510630695@whatsapp.net",
  "5584982545395953@whatsapp.net",
  "4984925996198823@whatsapp.net",
  "5584924757540637@whatsapp.net",
  "5584955428582445@whatsapp.net",
  "5584919350965729@g.us",
  "5584957621563831@whatsapp.net",
  "5584940350326087@whatsapp.net",
  "5584970633592464@whatsapp.net",
  "5584946564852838@whatsapp.net",
  "558497732214460@whatsapp.net",
  "5584949061501826@whatsapp.net",
  "558495419046601@whatsapp.net",
  "5584979442059749@whatsapp.net",
  "558497869226351@whatsapp.net",
  "5584922086432508@whatsapp.net",
  "4984941875850019@whatsapp.net",
  "5584926878778820@whatsapp.net",
  "5584916797627415@whatsapp.net",
  "5584968793337181@whatsapp.net",
  "5584923096821946@whatsapp.net",
  "5584943760426279@whatsapp.net",
  "5584960043579227@whatsapp.net",
  "5584935479365522@whatsapp.net",
  "558499238357645@whatsapp.net",
  "5584938720458613@g.us",
  "55849780619895@whatsapp.net",
  "5584996868201956@g.us",
  "558499761346433@whatsapp.net",
  "5584930656872019@whatsapp.net",
  "5584965484754710@whatsapp.net",
  "5584954597837896@g.us",
  "4984980006690844@whatsapp.net",
  "5584980327212055@g.us",
  "4984922320991252@whatsapp.net",
  "5584986245894756@whatsapp.net",
  "5584923107718761@g.us",
  "5584988555668837@whatsapp.net",
  "5584970785628752@whatsapp.net",
];

function processarContatos(contatos: string[]): {
  numerosPrivados: string[];
  grupos: string[];
  totalNumeros: number;
} {
  const numerosPrivados: string[] = [];
  const grupos: string[] = [];

  contatos.forEach((contato) => {
    const num: string | null = extrairNumero(contato);
    if (num && isNumeroValidoBrasil(num)) {
      if (isNumeroPrivado(contato)) {
        numerosPrivados.push(num);
      } else if (isGrupo(contato)) {
        grupos.push(num);
      }
    }
  });

  return {
    numerosPrivados,
    grupos,
    totalNumeros: contatos.length,
  };
}

function extrairNumero(contato: string): string | null {
  const numeroMatch: RegExpMatchArray | null = contato.match(/^(\d{16})/);
  return numeroMatch ? numeroMatch[1] : null;
}

function isNumeroValidoBrasil(num: string): boolean {
  return num.startsWith("55") && num.length === 16;
}

function isNumeroPrivado(contato: string): boolean {
  return contato.endsWith("@whatsapp.net");
}

function isGrupo(contato: string): boolean {
  return contato.endsWith("@g.us");
}

const resultado = processarContatos(listaContatos);

console.log(
  "Quantidade de Números Privados Válidos:",
  resultado.numerosPrivados.length
);
console.log("Lista de Números Privados Válidos:", resultado.numerosPrivados);
console.log("Quantidade de Grupos Válidos:", resultado.grupos.length);
console.log("Lista de Grupos Válidos:", resultado.grupos);
console.log("Total de Números Processados:", resultado.totalNumeros);
