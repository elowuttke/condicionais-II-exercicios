console.log(` - EXERCÍCIO 2 CONDICIONAIS II -`)

let nacionalidade = prompt("digite aqui a nacionalidade").toLowerCase();

// if(nacionalidade === "brasileira"){
//     console.log("a pessoa é do Brasil!");
// } else if(nacionalidade === "argentina"){
//     console.log("a pessoa é da Argentina!");
// } else if(nacionalidade === "uruguaia"){
//     console.log("a pessoa é do Uruguai!");
// } else if(nacionalidade === "chilena"){
//     console.log("a pessoa é do Chile!");
// } else if(nacionalidade === "colombiana"){
//     console.log("a pessoa é da Colômbia!");
// } else{
//     console.log("nacionalidade não encontrada")
// }

// Vamos recriar o exercício Nacionalidade da aula de condicionais I, utilizando switch-case. No arquivo script.js existe uma versão do código já escrita, mas você pode colar o exercício que você fez na última prática!

// -> Relembrando o enunciado.

// Crie uma função que receba do usuário sua nacionalidade, utilize um prompt que diga: "Escreva aqui sua nacionalidade" e guarde o valor da resposta em uma const nacionalidade.

// Vamos considerar que nosso programa aceita as seguintes 5 nacionalidades:

// brasileira;
// argentina;
// uruguaia;
// chilena;
// colombiana;
// Crie uma estrutura com o switch-case que verifique se a nacionalidade guardada na const nacionalidade, é igual a cada uma das nacionalidades acima, e caso seja, imprima a nacionalidade no console. O programa deve imprimir "nacionalidade não encontrada" caso o valor de nacionalidade não corresponda a nenhum dos valores.

switch(nacionalidade){
    case "brasileira":
        console.log("a pessoa é do Brasil!");
        break;
    case "argentina":
        console.log("a pessoa é da Argentina!");
        break;
    case "uruguaia":
        console.log("a pessoa é do Uruguai!");
        break;
    case "chilena":
        console.log("a pessoa é do Chile!");
        break;
    case "colombiana":
        console.log("a pessoa é da Colômbia!");
        break;
    default:
        console.log("nacionalidade não cadastrada");
}