console.log(` - EXERCÍCIO 1 CONDICIONAIS II -`)

// Crie um código que receba um número por prompt e verifique se um número é divisível por 2 ou por 3

// Faça isso:

// Utilizando ifs aninhados
//     if(expressao){
//         if(expressao){

//         }
//     }
// Utilizando um operador lógico para unir duas operações relacionais
//     if(expressao && expressao){ //&& para E
//     //expressao || expressao para OU     
    
//     }

let userNum = +(prompt(`Digite um número:`))

// if (userNum%2===0){
//         if (userNum%3===0){
//             console.log(`O número ${userNum} é divisível por 2 e por 3.`)
//     }
//     console.log(`O número ${userNum} é divisível por 2.`)
// } else {
//     console.log(`O número ${userNum} não é divisível por 2 nem por 3.`)
// }

// if (userNum%2==0 && userNum%3==0){
//     console.log(`O número ${userNum} é divisível por 2 e por 3.`)
// } else {
//     console.log(`O número ${userNum} não é divisível por 2 e/ou por 3.`)
// }

if (userNum%2==0 || userNum%3==0){
    if (userNum%2==0 && userNum%3==0) {
        console.log(`O número ${userNum} é divisível por 2 e por 3.`)
    } else if (userNum%2 == 0){
        console.log(`O número ${userNum} é divisível por 2.`)
    } else if (userNum%3 == 0) {
        console.log(`O número ${userNum} é divisível por 3.`)
    }
} else {
    console.log(`O número ${userNum} não é divisível por 2 nem por 3.`)
}