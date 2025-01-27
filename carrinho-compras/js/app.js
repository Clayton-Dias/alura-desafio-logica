let valorTotal = 0;
// Inicializa a variável 'valorTotal' com 0. Ela será usada para armazenar o total dos preços dos produtos no carrinho.

limpar();

function adicionar() {
    // Função chamada ao clicar no botão de "Adicionar".
    
    let produto = document.getElementById('produto').value;
    // Obtém o valor selecionado do campo de produto (ex: "Fone de ouvido - R$100").
    
    let nomeProduto = produto.split('-')[0];
    // Extrai o nome do produto (antes do "-") da string selecionada.

    let valorUnitario = produto.split('R$')[1];
    // Extrai o valor unitário do produto (após "R$").

    let quantidade = document.getElementById('quantidade').value;
    // Obtém o valor da quantidade inserida pelo usuário.

    // Verificar se o produto selecionado é válido
    if (!produto || produto.trim() === "") {
        alert("Selecione um produto válido.");
        return;
    }

    // Verificar se a quantidade inserida é válida
    if (isNaN(quantidade) || quantidade <= 0) {
        alert("Insira uma quantidade válida.");
        return;
    }

    let preco = valorUnitario * quantidade;
    // Calcula o preço total do produto (valorUnitario * quantidade).

    let carrinho = document.getElementById('lista-produtos');
    // Obtém a referência ao elemento HTML onde a lista de produtos será exibida.

    // Adiciona o produto ao carrinho
    carrinho.innerHTML += `
        <section class="carrinho__produtos__produto">
            <span class="texto-azul">${quantidade}x </span>${nomeProduto}<span class="texto-azul"> R$${valorUnitario}</span>
        </section>`;
    // Cria um novo item na lista de produtos com a quantidade e o nome do produto, juntamente com seu valor unitário.

    // Atualizar o valor total
    valorTotal += preco; 
    // Atualiza o valor total somando o preço calculado do produto ao total anterior.

    let campoTotal = document.getElementById('valor-total');
    // Obtém o elemento que exibe o valor total.

    campoTotal.textContent = `R$${valorTotal}`;
    // Atualiza o texto exibido com o valor total calculado.

    document.getElementById('quantidade').value = 0;
    // Após adicionar o produto, reseta o campo de quantidade para 0.
}

function limpar() {
    // Função chamada ao clicar no botão "Limpar".
    
    valorTotal = 0;
    // Reseta o valor total para 0.

    document.getElementById('lista-produtos').innerHTML = '';
    // Limpa a lista de produtos no carrinho.

    document.getElementById('valor-total').textContent = 'R$0,00';
    // Reseta o valor total exibido para 'R$0,00'.
}
