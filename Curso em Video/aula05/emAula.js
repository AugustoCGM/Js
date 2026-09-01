var n1 = 5
let n2 = 8.5
const n3 = 15

/*
    var = variável global
    let = variável local
    const = constante (não muda)

    var: Fica visível em toda a função onde foi declarada ou no escopo global
    se criada fora de uma função. Se você criar um var dentro de um bloco { }
    (como um if), ela ainda poderá ser acessada fora dele.
      
    let: Fica restrita apenas ao bloco { } onde foi definida, como dentro de um
    if, um for ou uma função. Fora daquele bloco, ela não existe
*/

let s1 = 'JavaScript'
let s2 = 'Curso em Video'
let s3 = 'Guanabara'

console.log(`O ${s1} é um ${s2} do professor ${s3}`) //o '`' é usado para interpolar variáveis dentro de uma string