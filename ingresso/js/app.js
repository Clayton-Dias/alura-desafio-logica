function comprar() {
    // Obtém o tipo de ingresso selecionado no dropdown
    let tipo = document.getElementById('tipo-ingresso').value;

    // Obtém a quantidade de ingressos a ser comprada e converte para um número inteiro
    let quantidade = parseInt(document.getElementById('qtd').value);

    // Verifica se a quantidade é um número positivo válido
    if (isNaN(quantidade) || quantidade <= 0) {
        alert('Por favor, insira uma quantidade válida.'); // Exibe um alerta caso o valor seja inválido
        return; // Interrompe a execução da função
    }

    // Verifica o tipo de ingresso selecionado e chama a função correspondente
    if (tipo == 'pista') {
        comprarPista(quantidade); // Função para comprar ingressos de pista
    } else if (tipo == 'inferior') {
        comprarInferior(quantidade); // Função para comprar ingressos de cadeira inferior
    } else {
        comprarSuperior(quantidade); // Função para comprar ingressos de cadeira superior
    }
}

function comprarPista(quantidade) {
    // Obtém a quantidade disponível de ingressos para pista
    let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);

    // Verifica se a quantidade solicitada excede a quantidade disponível
    if (quantidade > qtdPista) {
        alert('Quantidade indisponível para compra'); // Exibe um alerta se não houver ingressos suficientes
    } else {
        // Atualiza a quantidade disponível subtraindo a quantidade comprada
        qtdPista -= quantidade;
        document.getElementById('qtd-pista').textContent = qtdPista; // Atualiza o texto no elemento HTML
        alert('Ingresso(s) comprado(s) com sucesso!'); // Exibe uma mensagem de sucesso
    }
}

function comprarInferior(quantidade) {
    // Obtém a quantidade disponível de ingressos para cadeira inferior
    let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent);

    // Verifica se a quantidade solicitada excede a quantidade disponível
    if (quantidade > qtdInferior) {
        alert('Quantidade indisponível para compra'); // Exibe um alerta se não houver ingressos suficientes
    } else {
        // Atualiza a quantidade disponível subtraindo a quantidade comprada
        qtdInferior -= quantidade;
        document.getElementById('qtd-inferior').textContent = qtdInferior; // Atualiza o texto no elemento HTML
        alert('Ingresso(s) comprado(s) com sucesso!'); // Exibe uma mensagem de sucesso
    }
}

function comprarSuperior(quantidade) {
    // Obtém a quantidade disponível de ingressos para cadeira superior
    let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent);

    // Verifica se a quantidade solicitada excede a quantidade disponível
    if (quantidade > qtdSuperior) {
        alert('Quantidade indisponível para compra'); // Exibe um alerta se não houver ingressos suficientes
    } else {
        // Atualiza a quantidade disponível subtraindo a quantidade comprada
        qtdSuperior -= quantidade;
        document.getElementById('qtd-superior').textContent = qtdSuperior; // Atualiza o texto no elemento HTML
        alert('Ingresso(s) comprado(s) com sucesso!'); // Exibe uma mensagem de sucesso
    }
}
