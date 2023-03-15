//pegar elemento html dos botoes
const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');

//identificar o clique do botao
botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
        
        desmarcarBotaoSelecionado();
        
        selecionarBotaoCarrossel(botao);

        esconderImagemAtiva();

        mostrarNovaImagem(indice);

    })
})

function desmarcarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}

function selecionarBotaoCarrossel(botao) {
    botao.classList.add('selecionado');
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function mostrarNovaImagem(indice) {
    imagens[indice].classList.add('ativa');
}