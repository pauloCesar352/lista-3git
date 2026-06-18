/*let notas=[4.5, 10, 5.5, 6.3, 8.7 ]
let soma = 0
for (let i=0; i<notas.length; i++ ){
  soma += notas [i]
  let resultado = soma

}
console.log (`As notas são ${notas}`)
console.log (`A soma delas é igual a ${soma}`)
let media = soma/5
console.log (`E a média delas é ${media}`)*/
let numeros=[4.5, 10, 5.5, 6.3, 8.7 ]
let soma = 0
for(numero of numeros){
soma = soma+numero;
console.log (numero);
}
let media = soma/numeros.length
  console.log (soma)
 console.log (media)