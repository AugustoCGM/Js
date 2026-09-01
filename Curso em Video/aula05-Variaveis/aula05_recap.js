// A aula 05 do curso em vídeo foi sobre variáveis, tipos de dados e operadores. //

/*
Imagine que você está criando um pequeno sistema para armazenar informações básicas de um produto em um estoque. 
Siga estes passos:

Declare as variáveis: Crie três variáveis usando var para armazenar o nomeDoProduto (string), 
o preco (number) e se o produto está disponivel (boolean).

Atribua valores: Dê um valor inicial a cada uma delas (ex: "Camiseta", 29.90, true).

Verifique os tipos: Utilize o comando typeof para confirmar o tipo de dado de cada uma das variáveis que você criou.

Atualização: Mude o valor do preco para um valor promocional e altere o estado de disponivel para false.

Depuração: Adicione um comentário no seu código (usando //) explicando para que serve cada uma dessas variáveis.*/

nomeDoProduto = "Console de Video Game" // Armazena o nome do produto
preco = 299.99 // Armazena o preço do produto
disponivel = true // Indica se o produto está disponível no estoque

console.log(typeof nomeDoProduto) // Verifica o tipo da variável nomeDoProduto
console.log(typeof preco) // Verifica o tipo da variável preco
console.log(typeof disponivel) // Verifica o tipo da variável disponivel

promocao = true // Indica se o produto está em promoção

if (promocao) {
    preco = 149.99 // Atualiza o preço para o valor promocional
    disponivel = false // Atualiza o estado de disponibilidade para false
}

console.log(preco) // Exibe o preço atualizado do produto
