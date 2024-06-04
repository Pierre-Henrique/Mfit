function showText(elementId) {
    var overlay = document.getElementById("overlay");
    var overlayContent = document.querySelector(".overlay-content");
    overlay.style.display = "block";
    overlayContent.style.opacity = "1"; // Torna a caixa de texto visível
    var overlayText = document.getElementById("overlay-text");
    var content = document.getElementById("content");

    if (elementId === "disciplina") {
        overlayText.textContent = "Desenvolvimento Web em HTML5, CSS, JavaScript e Python. Consciente em uma disciplina certificadora, onde aprendemos a criar página em navegadores com HTML. Organizando a parte visual do site, decoração da página com CSS. Com JavaScript vamos tornar tudo mais dinâmico nas aplicações Web, onde os navegadores irão responder a interação do usuário ao conteúdo da página. Com o python vamos integrar nosso site ao banco de dados, onde tudo ficará salvo. Em resumo, vamos estruturar cada detalhe de uma página da internet.";
    } else if (elementId === "grupo") {
        overlayText.innerHTML = 
        `<div class="participant">
            <img src="imagens/Júlia.png.png" alt="Imagem de Júlia">
            <div>
                <p><strong>Nome:</strong> Júlia Gabriela Galdino Barbosa de Oliveira <br>
                <strong>Matrícula:</strong> 202308423134<br>
                <strong>Função:</strong> Programador e Designer</p>
            </div>
        </div>
        <div class="participant">
            <img src="imagens/Lucas.png.png" alt="Imagem de Lucas">
            <div>
                <p><strong>Nome:</strong> Lucas Moura Tavares <br>
                <strong>Matrícula:</strong> 202203060351<br>
                <strong>Função:</strong> Programador e Designer</p>
            </div>
        </div>
        <div class="participant">
            <img src="imagens/Mirella.png.png" alt="Imagem de Mirella">
            <div>
                <p><strong>Nome:</strong> Mirella Lais Silva de Oliveira <br>
                <strong>Matrícula:</strong> 202402397011<br>
                <strong>Função:</strong> Programador e Designer</p>
            </div>
        </div>
        <div class="participant">
            <img src="imagens/Pierre.png.png" alt="Imagem de Pierre">
            <div>
                <p><strong>Nome:</strong> Pierre Henrique de Oliveira Silva <br>
                <strong>Matrícula:</strong> 202402396919<br>
                <strong>Função:</strong> Programador e Designer</p>
            </div>
        </div>
        <div class="participant">
            <img src="imagens/henrique.png.png" alt="Imagem de Henrique">
            <div>
                <p><strong>Nome:</strong> Henrique José Silva Albuquerque <br>
                <strong>Matrícula:</strong> 202203377256<br>
                <strong>Função:</strong> Programador e Designer</p>
            </div>
        </div>`;
    } else if (elementId === "projeto") {
        overlayText.textContent = "É uma réplica web do app MFIT - Personal. Diante disso, nosso projeto consiste em um site onde o personal (cliente) poderá adicionar, remover, trocar e entre outras utilidades do treino de seus alunos. Além disso também, a parte de cadastro e acesso do personal e aluno.";
    } else if (elementId === "prototipo") {
        // Esconde o overlay e mostra as imagens de protótipos
        overlay.style.display = "none";
        content.innerHTML = `
            <div class="slider-container">
                <div class="slider" id="slider">
                    <!-- Imagens serão inseridas aqui pelo JavaScript -->
                </div>
                <a class="prev" onclick="mudarSlide(-1)">&#10094;</a>
                <a class="next" onclick="mudarSlide(1)">&#10095;</a>
            </div>
        `;
        carregarImagens();
        atualizarSlider();
    }
}

function hideText() {
    var overlay = document.getElementById("overlay");
    overlay.style.display = "none"; // Esconde a caixa de texto
}

function redirectToLogin() {
    window.location.href = "login/login.html";
}

const imagens = [
    "../imagens/prototipo1.jpg",
    "../imagens/prototipo2.jpg",
    "../imagens/prototipo4.jpg",
    "../imagens/prototipo5.jpg",
    "../imagens/prototipo6.jpg",
    "../imagens/prototipo7.jpg",
    "../imagens/prototipo8.jpg",
    "../imagens/prototipo9.jpg",
    "../imagens/prototipo10.jpg",
    "../imagens/prototipo11.jpg",
    "../imagens/prototipo12.jpg",
    "../imagens/prototipo13.jpg",
    "../imagens/prototipo14.jpg",
    "../imagens/prototipo15.jpg",
    "../imagens/prototipo16.jpg"
];

let indiceAtual = 0;

function carregarImagens() {
    const slider = document.getElementById('slider');
    slider.innerHTML = imagens.map(src => `<div class="slide"><img src="${src}" alt="prototipo"></div>`).join('');
}

function mudarSlide(n) {
    const slides = document.getElementsByClassName('slide');
    indiceAtual = (indiceAtual + n + slides.length) % slides.length;
    atualizarSlider();
}

function atualizarSlider() {
    const slider = document.getElementById('slider');
    slider.style.transform = `translateX(-${indiceAtual * 100}%)`;
}

document.addEventListener('DOMContentLoaded', () => {
    carregarImagens();
    atualizarSlider();
});
