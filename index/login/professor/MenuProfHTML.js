
const menus = {
    cadastro_aluno: `
        <h2>Cadastro de Aluno</h2>
        <form action="#" method="POST">
            <label for="nome">Nome:</label><br>
            <input type="text" id="nome" name="nome" required><br><br>

            <label for="email">Email:</label><br>
            <input type="email" id="email" name="email" required><br><br>

            <label for="objetivo">Objetivo:</label><br>
            <input type="text" id="objetivo" name="objetivo" required><br><br>

            <label for="senha">Senha:</label><br>
            <input type="password" id="senha" name="senha" required><br><br>

            <label for="csenha">Confirmação da Senha:</label><br>
            <input type="password" id="csenha" name="csenha" required><br><br>

            <label for="sexo">Sexo:</label><br>
            <select id="sexo" name="sexo" required>
                <option value="">Selecione o sexo:</option>
                <option value="masculino">Masculino</option>
                <option value="feminino">Feminino</option>
            </select><br><br>

            <button type="submit">Cadastrar</button>
        </form>
    `,
    alunos_ativos: `
        <h2>Alunos Ativos</h2>
        <ul>
            <li>Lucas Moura</li>
            <li>Mirella Laís</li>
        </ul>
    `,
    treino: `
        <h3>Cadastrar Treino</h3>
        <form action="#" method="POST">
            <label for="tipo_treino">Tipo de Treino:</label><br>
            <input type="text" id="tipo_treino" name="tipo_treino" required><br><br>

            <label for="duracao_treino">Duração do Treino:</label><br>
            <input type="text" id="duracao_treino" name="duracao_treino" required><br><br>

            <button type="submit">Cadastrar Treino</button>
        </form>
    `,
    objetivo_do_treino: `
        <h4>Objetivo</h4>
        <form action="#" method="POST">
            <label for="objetivo_do_treino">Objetivo do Aluno:</label><br>
            <select id="objetivo_do_treino" name="objetivo_do_treino" required>
                <option value="">Selecione o objetivo:</option>
                <option value="hipertrofia">Hipertrofia</option>
                <option value="emagrecimento">Emagrecimento</option>
                <option value="preparo">Preparo Físico</option>
            </select>
        </form>
    `,
    faturas: `
        <h5>Lançar Plano ou Fatura</h5>
        <form action="#" method="POST">
            <label for="tipo_fatura">Tipo de Fatura:</label><br>
            <select id="tipo_fatura" name="tipo_fatura" required>
                <option value="">Selecione o tipo de fatura:</option>
                <option value="plano">Plano</option>
                <option value="fatura">Fatura</option>
            </select><br><br>

            <button type="submit">Lançar Plano ou Fatura</button>
        </form>
    `
};

// Função para alternar a visibilidade dos elementos
function toggleVisibility(id) {
    // Oculta todos os elementos com a classe "hidden"
    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach(element => {
        element.style.display = 'none';
    });

    // Mostra o elemento correspondente ao ID fornecido
    const element = document.getElementById(id);
    element.innerHTML = menus[id];
    element.style.display = 'block';
}

// Função para rolar para o topo da página ao clicar em qualquer lugar do corpo
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
