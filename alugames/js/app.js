let jogosAlugados = 1;  // Inicializa a variável com a quantidade de jogos alugados, considerando que já há pelo menos um jogo alugado.

function alterarStatus(id) {
    // Seleciona o jogo clicado pelo id.
    let jogoClicado = document.getElementById(`game-${id}`);
    
    // Seleciona a imagem do jogo clicado.
    let imagem = jogoClicado.querySelector('.dashboard__item__img');
    
    // Seleciona o botão de ação (Alugar/Devolver) do jogo clicado.
    let botao = jogoClicado.querySelector('.dashboard__item__button');
  
    // Verifica se a imagem do jogo já está com a classe indicando que foi alugado
    if(imagem.classList.contains('dashboard__item__img--rented')) {
        // Se o jogo estiver alugado, pergunta se o usuário realmente deseja devolver
        const confirmarDevolucao = confirm("Você tem certeza que deseja devolver o jogo?");
        
        // Se o usuário confirmar a devolução
        if(confirmarDevolucao) {
            // Remove a classe que indica que o jogo está alugado
            imagem.classList.remove('dashboard__item__img--rented');
            
            // Remove a classe do botão que indica a devolução
            botao.classList.remove('dashboard__item__button--return');
            
            // Muda o texto do botão de "Devolver" para "Alugar"
            botao.textContent = "Alugar";
            
            // Decrementa a contagem de jogos alugados
            jogosAlugados--;
            
            // Exibe a nova quantidade de jogos alugados no console
            console.log(`Jogos alugados: ${jogosAlugados}`);
        }
    } else {
        // Se o jogo não estiver alugado, muda a classe da imagem para indicar que o jogo foi alugado
        imagem.classList.add('dashboard__item__img--rented');
        
        // Adiciona a classe no botão para indicar a devolução
        botao.classList.add('dashboard__item__button--return');
        
        // Muda o texto do botão de "Alugar" para "Devolver"
        botao.textContent = "Devolver";
        
        // Incrementa a contagem de jogos alugados
        jogosAlugados++;
        
        // Exibe a nova quantidade de jogos alugados no console
        console.log(`Jogos alugados: ${jogosAlugados}`);
    }

    // Chama a função para contar e exibir o total de jogos alugados
    contarEExibirJogosAlugados();
}

function contarEExibirJogosAlugados() {
    // Exibe no console o total de jogos alugados
    console.log(`Total de jogos alugados: ${jogosAlugados}`);
}

// Inicializa a contagem de jogos alugados considerando os que já estão com a classe 'dashboard__item__img--rented' ao carregar a página
document.addEventListener('DOMContentLoaded', function() {
    // Conta quantos jogos já estão alugados (têm a classe 'dashboard__item__img--rented') ao carregar a página
    jogosAlugados = document.querySelectorAll('.dashboard__item__img--rented').length;
    
    // Exibe o total de jogos alugados logo após a inicialização da página
    contarEExibirJogosAlugados();
});
