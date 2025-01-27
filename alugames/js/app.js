/* Função que altera o status de um jogo entre "alugado" e "devolvido" */
function alterarStatus (id) {
    /* Obtém o elemento do jogo clicado utilizando o id dinâmico do jogo (ex: game-1) */
    let jogoClicado = document.getElementById(`game-${id}`);

    /* Seleciona a imagem do jogo dentro do elemento do jogo */
    let imagem = jogoClicado.querySelector('.dashboard__item__img');

    /* Seleciona o botão de ação (Alugar/Devolver) dentro do elemento do jogo */
    let botao = jogoClicado.querySelector('.dashboard__item__button');
  
    /* Verifica se a imagem do jogo já possui a classe 'dashboard__item__img--rented', 
       indicando que o jogo está alugado */
    if(imagem.classList.contains('dashboard__item__img--rented')){
        /* Remove a classe 'dashboard__item__img--rented' da imagem, indicando que o jogo não está mais alugado */
        imagem.classList.remove('dashboard__item__img--rented');

        /* Remove a classe 'dashboard__item__button--return' do botão, mudando o estilo do botão de devolver */
        botao.classList.remove('dashboard__item__button--return');

        /* Altera o texto do botão para "Alugar" */
        botao.textContent = "Alugar";        
    }else{
        /* Adiciona a classe 'dashboard__item__img--rented' à imagem, indicando que o jogo está agora alugado */
        imagem.classList.add('dashboard__item__img--rented');

        /* Adiciona a classe 'dashboard__item__button--return' ao botão, mudando o estilo do botão para devolver */
        botao.classList.add('dashboard__item__button--return');

        /* Altera o texto do botão para "Devolver" */
        botao.textContent = "Devolver";        
    }
}

