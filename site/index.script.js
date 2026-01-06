document.addEventListener('DOMContentLoaded', function () {
    const botaoDeAcessibilidade = document.getElementById('botao-acessibilidade');
    const opcoesDeAcessibilidade = document.getElementById('opcoes-acessibilidade');

    const aumentaFonteBotao = document.getElementById('aumentar-fonte');
    const diminuiFonteBotao = document.getElementById('diminuir-fonte');

    let tamanhoAtualFonte = 1;
    const passoFonte = 0.1;
    const tamanhoMaximo = 1.5;
    const tamanhoMinimo = 0.8;

    // Abre e fecha o menu de acessibilidade
    botaoDeAcessibilidade.addEventListener('click', function () {
        botaoDeAcessibilidade.classList.toggle('rotacao-botao');
        opcoesDeAcessibilidade.classList.toggle('apresenta-lista');
    });

    // Aumenta o tamanho da fonte
    aumentaFonteBotao.addEventListener('click', function () {
        if (tamanhoAtualFonte < tamanhoMaximo) {
            tamanhoAtualFonte += passoFonte;
            document.body.style.fontSize = `${tamanhoAtualFonte}rem`;
        }
    });

    // Diminui o tamanho da fonte
    diminuiFonteBotao.addEventListener('click', function () {
        if (tamanhoAtualFonte > tamanhoMinimo) {
            tamanhoAtualFonte -= passoFonte;
            document.body.style.fontSize = `${tamanhoAtualFonte}rem`;
        }
    });
});
