// Função principal que sorteia os números
function sortear() {
    // Obtém os valores dos inputs e converte para números
    let quantidade = parseFloat(document.getElementById('quantidade').value); // Quantidade de números a serem sorteados
    let de = parseInt(document.getElementById('de').value); // Limite inferior
    let ate = parseInt(document.getElementById('ate').value); // Limite superior

    // Verifica se o valor do campo "De" é maior ou igual ao valor do campo "Até"
    if (de >= ate) {
        // Se for, exibe um alerta informando ao usuário para corrigir os valores
        alert('Campo "Do número" deve ser inferior ao campo "Até o número". Verifique!');

        // Impede que a execução do código continue, retornando da função
        return;
    }


    // Verifica se a quantidade de números solicitada é maior que o intervalo disponível entre "De" e "Até"
    if (quantidade > (ate - de + 1)) {
        // Se for, exibe um alerta informando ao usuário que a quantidade deve ser menor ou igual ao intervalo
        alert('Campo "Quantidade" deve ser menor ou igual ao intervalo informado no campo "Do número" até o campo "Até o número". Verifique!');

        // Impede que a execução do código continue, retornando da função
        return;
    }


    // Array que armazenará os números sorteados
    let numerosSorteados = [];
    let numero;

    // Loop para sortear a quantidade de números solicitados
    for (let i = 0; i < quantidade; i++) {
        // Gera um número aleatório dentro do intervalo especificado
        numero = obterNumeroAleatorio(de, ate);

        // Garante que o número não seja repetido no array
        while (numerosSorteados.includes(numero)) {
            numero = obterNumeroAleatorio(de, ate);
        }
        // Adiciona o número único ao array
        numerosSorteados.push(numero);
    }

    // Atualiza o conteúdo do elemento de resultado com os números sorteados
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${numerosSorteados.sort((a, b) => a - b)}</label>`;

    // Chama a função que altera o estilo do botão de reiniciar
    alterarEstiloResultado();
}

// Função para gerar um número aleatório entre "de" e "ate"
function obterNumeroAleatorio(de, ate) {
    // Gera um número aleatório no intervalo fornecido (incluindo os limites)
    return Math.floor(Math.random() * (ate - de + 1)) + de;
}

// Função que altera o estilo do botão "Reiniciar"
function alterarEstiloResultado() {
    let botao = document.getElementById('btn-reiniciar');

    // Verifica se o botão possui a classe desabilitada
    if (botao.classList.contains('container__botao-desabilitado')) {
        // Remove a classe de desabilitado e adiciona a de habilitado
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    } else {
        // Remove a classe de habilitado e adiciona a de desabilitado
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }
}

// Função para reiniciar os valores e o estado da aplicação
function reiniciar() {
    // Limpa os valores dos inputs
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';

    // Restaura o texto padrão do resultado
    document.getElementById('resultado').innerHTML = `<label class="texto__paragrafo">Números sorteados: nenhum até agora</label>`;

    // Chama a função para alterar o estilo do botão de reiniciar
    alterarEstiloResultado();
}
