// Define a função para mostrar o conteúdo com base no ID
function showContent(id) {
    // Esconde todos os conteúdos
    var contents = document.querySelectorAll('.content');
    contents.forEach(function(content) {
        content.classList.add('hidden');
    });

    // Mostra o conteúdo correspondente ao ID fornecido
    var contentToShow = document.getElementById(id);
    contentToShow.classList.remove('hidden');
}
