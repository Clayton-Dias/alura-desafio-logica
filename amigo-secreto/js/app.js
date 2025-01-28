// Inicializa um array vazio chamado 'amigos' para armazenar os nomes dos amigos.
let amigos = [];

// Define a função 'adicionar' que será chamada quando um novo amigo for adicionado.
function adicionar() {
    // Obtém o valor do campo de texto com o id 'nome-amigo' e armazena na variável 'amigo'.
    let amigo = document.getElementById('nome-amigo').value;
    // Obtém o elemento HTML com o id 'lista-amigos' e armazena na variável 'lista'. Este é o local onde os nomes dos amigos serão exibidos.
    let lista = document.getElementById('lista-amigos');

    // Verifica se o campo de nome do amigo está vazio.
    if (amigo == '') {
        // Se estiver vazio, exibe um alerta pedindo para informar o nome do amigo e sai da função.
        alert('Informe o nome do amigo!');
        return;
    }

    // Verifica se o nome do amigo já foi adicionado na lista 'amigos'.
    if (amigos.includes(amigo)) {
        // Se já foi adicionado, exibe um alerta informando que o amigo já foi adicionado e sai da função.
        alert('Amigo já adicionado!');
        return;
    }

    // Adiciona o nome do amigo ao array 'amigos'.
    amigos.push(amigo);

    // Verifica se a lista de amigos está vazia.
    if (lista.textContent == '') {
        // Se estiver vazia, adiciona o nome do amigo como o primeiro item.
        lista.textContent = amigo;
    } else {
        // Se não estiver vazia, adiciona o nome do amigo à lista, separado por uma vírgula e espaço.
        lista.textContent += ', ' + amigo;
    }

    // Limpa o campo de texto 'nome-amigo' após adicionar o amigo.
    document.getElementById('nome-amigo').value = '';
}

// Define a função 'sortear' que será chamada quando o sorteio for realizado.
function sortear() {
    // Verifica se há menos de 3 amigos cadastrados.
    if (amigos.length < 3) {
        // Se houver menos de 3, exibe um alerta pedindo para informar pelo menos quatro amigos e sai da função.
        alert('Informe pelo menos quatro amigos!');
        return;
    }

    // Embaralha a lista de amigos usando a função 'embaralhar'.
    embaralhar(amigos);

    // Obtém o elemento HTML com o id 'lista-sorteio', que é onde o resultado do sorteio será exibido.
    let sorteio = document.getElementById('lista-sorteio');

    // Percorre a lista de amigos
    for (let i = 0; i < amigos.length; i++) {
        // Adiciona um item na lista do sorteio. Cada item mostra um amigo e quem ele tirou no amigo secreto.
        // O operador % garante que o último amigo sorteie o primeiro da lista (círculo).
        sorteio.innerHTML += `<li>${amigos[i]} --> ${amigos[(i + 1) % amigos.length]}</li><br>`;
    }

    /*
    // Parece ser uma tentativa inicial de realizar o sorteio, mas foi substituída pelo loop 'for' acima.
    if (i == amigos.length - 1) {
        sorteio.innerHTML = sorteio.innerHTML + amigos[i] +' --> ' +amigos[0] + '<br/>';
    } else {
        sorteio.innerHTML = sorteio.innerHTML + amigos[i] +' --> ' +amigos[i + 1] + '<br/>';
    }
    */
}


// Define a função 'embaralhar' que recebe uma lista e a embaralha aleatoriamente.
function embaralhar(lista) {
    // Percorre a lista de trás para frente.
    for (let indice = lista.length; indice; indice--) {
        // Gera um índice aleatório entre 0 e o índice atual.
        const indiceAleatorio = Math.floor(Math.random() * indice);
         // Troca o elemento do índice atual com o elemento do índice aleatório.
        [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];
    }
}

// Define a função 'reiniciar' que limpa a lista de amigos e o resultado do sorteio.
function reiniciar() {
    // Limpa o array de amigos.
    amigos = [];
    // Limpa o conteúdo da lista de amigos no HTML.
    document.getElementById('lista-amigos').innerHTML = '';
    // Limpa o conteúdo do resultado do sorteio no HTML.
    document.getElementById('lista-sorteio').innerHTML = '';
}