console.log(` - EXERCÍCIO 3 CONDICIONAIS II -`)
// Reescreva os códigos do arquivo script.js utilizando o if ternário.

// Relembrando o if ternário

// condição ? expr1 : expr2
// Onde :
// condição é uma expressão que é avaliada como true ou false.
// expr1, expr2 são xpressões com valores de qualquer tipo.

//código a ser reescrito
// if(nome === "José"){
// 	console.log("Oi, Zé!");
// } else {
// 	console.log("Olá, "+nome);
// }

// if(idade >= 18){
// 	console.log("pode tirar carteira de motorista!");
// } else {
// 	console.log("Ainda não pode tirar carteira de motorista");
// }

const userName = prompt(`Digite seu nome:`)
const userAge = +(prompt(`Quantos anos você tem?`))

userName == `José` 
? console.log(`Oi, Zé?`) 
: console.log(`Olá, ${userName}!`)

userAge >= 18 
? console.log(`${userName} pode tirar carteira de motorista!`) 
: console.log(`${userName} ainda não pode tirar carteira de motorista.`)